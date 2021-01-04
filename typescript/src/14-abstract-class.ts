export {}

// 抽象类不能被实例化，abstract关键词的方法子类必须实现
abstract class Animal {
  eat(food: string): void {
    console.log(`呼噜呼噜的吃: ${food}`)
  }

  abstract run(distance: number): void
} 

class Dog extends Animal {
  run(distance: number): void {
    console.log('爬行' + distance)
  }
}