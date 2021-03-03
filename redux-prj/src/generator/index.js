/**
 *  💡 Generator
 *
 *    generator를 이해하기 위해선 아래의 두 가지를 알아야한다.
 *   1️⃣ 다음 조건을 만족하는 객체는 반복자(Iterator)이다.
 *      - next 메소드를 갖고 있다.
 *      - next 메소드는 value와 done 속성값을 가진 객체를 반환한다.
 *      - done 속성값은 작업이 끝났을 때 참이 된다.
 *
 *   2️⃣ 다음 조건을 만족하면 반복 가능(Iterable)한 객체다.
 *      - Symbol.iterator 속성값으로 함수를 갖고 있다.
 *      - 해당 함수를 호출하면 반복자(Iterator)를 반환한다.
 */
function* f1() {
  console.log('f1-1');
  yield 10;
  console.log('f1-2');
  yield 20;
  console.log('f1-3');
  return 'finished';
}
/**
 *  📌 아래의 generator 객체가 iterator이다.
 */
const gen = f1();
/**
 * 📌 "Symbol.iterator 속성값으로 함수를 갖고있다." 를 만족한다.
 */
console.log(gen[Symbol.iterator]() === gen);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// eslint-disable-next-line no-restricted-syntax
for (const v of f1()) console.log(v);
const arr = [...f1()];
console.log(arr);

function* naturalNumbers() {
  let v = 1;

  /**
   * 일반 함수였다면 무한루프에 빠졌겠지만,
   * generator는 멈출 수 있기 때문에 문제없다.
   */
  while (true) {
    yield (v += 1);
    console.log(v);
  }
}
const gen2 = naturalNumbers();
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

/**
 * 우리가 작성한 saga 함수
 */
function* minsu() {
  const myMsgList = [
    '안녕 나는 민수야',
    '만나서 반가워',
    '내일 영화 볼래?',
    '시간 안되니?',
    '내일 모레는 어때?',
  ];
  // eslint-disable-next-line no-restricted-syntax
  for (const msg of myMsgList) {
    const ret = yield msg;
    console.log('\tret', ret);
    console.log('\tminsu func', msg);
    console.log('수지: ', ret);
  }
}

/**
 * saga의 middleware
 */
function suji() {
  const myMsgList = ['fdfdfd', '안녕 나는 수지야', '그래 반가워', '...'];
  // eslint-disable-next-line no-shadow
  const gen = minsu();
  // eslint-disable-next-line no-restricted-syntax
  for (const msg of myMsgList) {
    console.log('\tsuji func', msg);
    console.log('민수: ', gen.next(msg).value);
  }
}
suji();
