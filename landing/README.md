# landing: 「인공지능은 교육자의 꿈을 꾸는가」 액티비티 페이지

`activity.soople.site`에 배포하는 정적 랜딩입니다. 블로그(Gatsby, GitHub Pages)와는 빌드와 배포가 분리돼 있습니다.

```
landing/
  index.html        소개 + Tally 신청 임베드
  share.html        당일 익명 카드 쓰기 (QR이 여기로 연결)
  board.html        승인된 카드를 실시간으로 보여 주는 보드
  assets/config.js  행사 전에 채울 값 (Supabase, Tally, 일시)
supabase/migrations/20261013000000_practices.sql   테이블, RLS, Realtime
```

## 데이터가 흐르는 길

| 구분 | 경로 | 개인정보 |
|---|---|---|
| 사전 신청 | `index.html`의 Tally 임베드 → Tally | 이름·연락처 (Tally에만 존재) |
| 당일 카드 | `share.html` → Supabase `practices` | 없음 (학교급·과목·본문만) |

두 경로 사이에는 조인 키가 없습니다. 누가 어떤 카드를 썼는지 연결할 수 없다는 것이 익명성의 실체입니다. 이 구조를 깨는 필드(이메일, 신청 번호 등)를 카드에 추가하지 마세요.

## 설정 순서

### 1. Supabase

1. 프로젝트를 만듭니다. 리전은 Seoul(ap-northeast-2)을 권합니다.
2. SQL Editor에 `supabase/migrations/20261013000000_practices.sql` 전체를 붙여 넣어 실행합니다. (Supabase CLI를 쓴다면 `supabase db push`)
3. Settings → API에서 **Project URL**과 **anon public key**를 복사해 `landing/assets/config.js`에 넣습니다. `service_role` 키는 절대 넣지 않습니다.
4. 접수 시간을 정합니다. 기본값은 "닫힘"(2099년)이라, 이 문장을 실행하기 전에는 카드가 저장되지 않습니다.

   ```sql
   update public.event_window
   set opens_at = '2026-11-07 13:00+09', closes_at = '2026-11-07 18:00+09'
   where id = 1;
   ```

   `config.js`의 `OPENS_AT`/`CLOSES_AT`는 화면 안내용이고, 실제 차단은 이 테이블이 합니다. 두 곳의 시간을 같게 맞춰 주세요.
5. Database → Replication에서 `practices`가 `supabase_realtime`에 들어 있는지 확인합니다. (마이그레이션이 등록합니다.)

### 2. Tally

1. 신청 폼을 만들고, 폼 주소 `tally.so/r/XXXXXX`의 `XXXXXX`를 `config.js`의 `TALLY_FORM_ID`에 넣습니다.
2. 폼에 개인정보 수집·이용 동의 항목을 넣습니다. 수집 항목, 목적, 보유기간(행사 종료 후 파기 시점)을 적어 주세요. 이 페이지는 "신청 정보는 카드와 연결되지 않는다"고 안내하고 있으므로 폼의 안내와 맞아야 합니다.

### 3. Cloudflare Pages (정적 호스팅)

1. Pages에서 이 GitHub repo를 연결합니다.
2. Framework preset은 None, 빌드 명령은 비워 두고, **빌드 출력 디렉터리는 `landing`** 으로 지정합니다.
3. Build watch paths(변경 감시 경로)에 `landing/*`을 넣으면 블로그 글만 수정한 push로는 이 사이트가 다시 배포되지 않습니다.
4. Custom domains에 `activity.soople.site`를 추가합니다.

### 4. Squarespace DNS

도메인이 Squarespace Domains에 있으므로 DNS 설정(도메인 선택 → DNS 설정 → 사용자 지정 레코드)에서 한 줄만 추가합니다.

| 호스트 | 유형 | 값 |
|---|---|---|
| `activity` | CNAME | `<Pages 프로젝트 이름>.pages.dev` |

- 값은 Cloudflare Pages가 안내하는 주소를 그대로 씁니다. 화면의 안내가 이 문서보다 우선합니다.
- `soople.site`(apex)와 `www`의 기존 레코드(GitHub Pages)는 건드리지 않습니다.
- 반영에는 시간이 걸릴 수 있습니다. Pages 쪽 도메인 상태가 "Active"가 될 때까지 기다립니다.

### 5. QR

QR은 `https://activity.soople.site/share`로 만듭니다. 현장 안내판에는 "이름과 학교 이름은 적지 않습니다"를 함께 적어 두세요.

## 행사 당일 운영

- **승인**: 새 카드는 `approved = false`로 들어옵니다. Supabase Studio의 `practices` 테이블에서 `approved`를 켜면 보드에 나타납니다. 한꺼번에 승인하려면 다음을 씁니다.

  ```sql
  update public.practices set approved = true where not approved;
  ```

  식별 정보가 들어간 카드는 승인하지 말고 `friction`/`practice` 본문을 고치거나 삭제합니다.
- **보드 화면**: `https://activity.soople.site/board`를 프로젝터에 띄웁니다. Realtime으로 갱신되고, 연결이 끊겨도 15초마다 다시 읽습니다.
- **시간 연장**: 행사가 길어지면 `update public.event_window set closes_at = '...' where id = 1;` 한 줄이면 됩니다.
- **종료 후**: 접수 창을 닫고(`closes_at`을 과거로), 보존할 내용은 Studio에서 CSV로 내려받습니다.

## 점검표 (행사 전)

- [ ] `config.js`의 URL, anon key, Tally ID, 일시를 채웠다
- [ ] `event_window`를 행사 시간으로 바꿨다
- [ ] 테스트 카드 한 장을 쓰고, 승인 전에는 보드에 안 보이고 승인 후에 나타나는지 확인했다
- [ ] 휴대폰(모바일 데이터)에서 `/share`가 열리고 제출되는지 확인했다
- [ ] 테스트 카드를 삭제했다 (`delete from public.practices;`)
- [ ] Supabase 무료 프로젝트가 일시정지 상태가 아닌지 확인했다 (일정 기간 활동이 없으면 멈출 수 있음)

## 알아 둘 점

- anon key는 브라우저에 그대로 노출됩니다. 안전은 키가 아니라 RLS가 지킵니다. 익명 사용자는 행사 시간에 카드를 추가하는 것과 승인된 카드를 읽는 것만 할 수 있습니다.
- 스팸은 숨김 칸(honeypot)과 승인 절차로 막습니다. 승인 전 카드는 보드에 나오지 않으므로 스팸이 공개 화면에 노출되지는 않습니다. 저장 자체를 서버에서 검증하려면 Turnstile과 Edge Function이 필요하지만, 이번 MVP에서는 넣지 않았습니다.
- 카드 본문에 학생이나 본인이 식별되는 내용이 들어올 수 있습니다. 승인 단계가 그 마지막 방어선입니다.
