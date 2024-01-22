// Class : obj를 만들 수 있는 틀(재사용성)

/* 
    속성
    - 만들어진 연도 (year)
    - 집의 이름 (name)
    - 창문의 개수 (window)

    메소드
    - 건물의 나이 출력 (getAge())
    - 창문의 개수 출력 (getWindow())
 */

class House {
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  // 메소드
  getAge() {
    console.log(`${this.name}은 건축한지 ${2024 - this.year}년 됐어요.`);
  }

  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개에요`);
  }
}

// 많은 객체를 만들어야 할 때 매번 아래처럼 직접 만들면 비효율적임
/*
const h1 = {
    name: "old",
    year: 1789,
    window: 1,
    // 메서드 1
    // 메서드2
}
*/

const house1 = new House(1789, "old", 1);
house1.getAge();
house1.getWindow();
console.log(house1.name);

const house2 = new House(2015, "자이", 10);
house2.getAge();
house2.getWindow();
console.log(house2.name);

console.log("--------------상속--------------");

// extends 키워드를 사용해서 상속
// House 클래스의 함수와 속성을 사용할 수 있음
// House << Apartment
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    // 상속받는 속성은 super. 사용
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getApartInfo() {
    return `${this.year}년에 지어진 ${this.name}.
        총 층수는 ${this.floor}, 창문의 개수는 ${this.window}`;
  }

  // overriding (덮어쓰기) - 재정의
  // 부모클래스의 메소드 이름은 똑같이 쓰지만 동작을 다르게 하고 싶을 때
  getWindow() {
    return `${this.name}의 창문은 ${this.windowMaker}에서 만들었고, ${this.window}개 입니다.`;
  }

  // getAge()도 쓸 수 있음 - 상속받음
}

// year, name, window, floor, windowMaker
const apart1 = new Apartment(2022, "래미안", 19, 50, "KCC");
console.log(apart1.getWindow());
console.log(apart1.getApartInfo());
apart1.getAge();
console.log(apart1);

console.log("============실습. shape 클래스 만들기 ===========");

class Shape {
  constructor(garo, sero) {
    this.garo = garo;
    this.sero = sero;
  }

  getArea() {
    return this.garo * this.sero;
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

// 상속 실습
// 1. Rectangle(직사각형) 클래스 만들고, 대각선 길이 구하는 메소드
class Rectangle extends Shape {
  constructor(garo, sero) {
    super(garo, sero);
  }
  getArea() {
    return Math.sqrt(this.garo ** 2 + this.sero ** 2);
  }
}

let rec2 = new Rectangle(3, 4);
console.log("직사각형 대각선 길이: ", rec2.getArea());

// 2. Triangle(삼각형) 클래스 만들고, 넓이 반환하는 메소드
class Triangle extends Shape {
  constructor(garo, sero) {
    super(garo, sero);
  }
  getArea() {
    return this.garo * this.sero * 0.5;
  }
}

let tri1 = new Triangle(3, 4);
console.log("삼각형 넓이: ", tri1.getArea());

// 3. Circle(원) 클래스 만들고, 넓이 반환 메소드
class Circle extends Shape {
  constructor(garo, sero, radius) {
    super(garo, sero);
    this.radius = radius;
  }
  getArea() {
    return this.radius ** 2 * Math.PI;
  }
}

let circle = new Circle(3, 3, 3);
console.log("원의 넓이: ", circle.getArea());
