// 행사 전에 이 파일의 값만 채우면 된다. (anon key는 공개되어도 안전하게 설계된 키다.
// 대신 RLS가 꺼지면 안 된다. 절대 service_role 키를 여기에 넣지 말 것.)
window.ACTIVITY = {
  // Supabase 프로젝트 → Settings → API 의 Project URL. 예: https://abcdefgh.supabase.co
  // (끝에 /rest/v1 을 붙이지 않는다. 붙어 있어도 코드가 걷어 내지만, 처음부터 루트 주소로 적는다.)
  SUPABASE_URL: 'https://klsxedybxtzffpqffxya.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtsc3hlZHlieHR6ZmZwcWZmeHlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE4MzQ0NjQsImV4cCI6MjEwNzQxMDQ2NH0.UlqVzagvZgyTLNpHREgNIqIBSg3aEx8c6NokcLC9VAY',

  // Tally 폼 주소 tally.so/r/XXXXXX 에서 XXXXXX 부분
  TALLY_FORM_ID: '',

  // 비워 두면 "일정은 확정되는 대로 공지합니다"로 표시된다.
  EVENT_DATE_TEXT: '',
  EVENT_PLACE_TEXT: '',

  // 카드 접수 시간 (ISO 8601, 한국 시간). 화면 안내용이며 실제 차단은 DB의 event_window가 한다.
  // 예: '2026-11-07T13:00:00+09:00'
  OPENS_AT: '2026-10-08T13:00:00+09:00',
  CLOSES_AT: '2026-11-08T23:00:00+09:00',
};
