// DB에는 코드값을 저장하고, 화면에는 이 라벨을 보여 준다.
// 라벨 문구를 바꿔도 이미 쌓인 데이터는 깨지지 않는다.
window.LABELS = {
  ai_level: {
    red: { name: '빨강', short: 'AI 없이' },
    yellow: { name: '노랑', short: '교사의 지도 아래' },
    green: { name: '초록', short: '탐색 감독' },
  },
  functions: {
    qualification: '자격화',
    socialization: '사회화',
    subjectification: '주체화',
  },
  sustain_by: {
    private: '사적 자원으로 충분',
    public: '공적 차원의 뒷받침이 필요',
    both: '사적 자원과 공적 차원 모두 필요',
  },
};
