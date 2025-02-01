const data = [
  {
    title: '안전한 비밀번호 생성기',
    desc: '사용자가 원하는 길이와 옵션(대소문자, 숫자, 특수문자 포함)을 선택하여 보안성이 높은 비밀번호를 생성합니다.',
    link: '/generator/generator.html'
  },
  {
    title: 'txt 파일 읽기 및 저장',
    desc: '사용자가 로컬에서 txt 파일을 열어 내용을 확인하고, 편집 후 다시 저장(내보내기)할 수 있는 기능을 제공합니다.',
    link: 'textRead/textRead.html'
  },
];

const container = document.querySelector('.container');

const ele = data.map( obj => {
  return `<article class="card">
            <h2 class="title">${obj.title}</h2>
            <p class="desc">${obj.desc}</p>
            <a href="${obj.link}" class="link" aria-label="${obj.title}">보러가기</a>
          </article>`;
}).join(''); // join용도 배열을 하나의 문자열로 변환

document.querySelector('.container').innerHTML = ele;