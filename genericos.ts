function identity<T>(value: T): T {
    return value;
}

const num = identity<number>(30);
console.log(num);

const str = identity<string>("Hola TypeScript");
console.log(str);

const obj = identity<{ name: string; age: number }>({ name: "Melanie", age: 20 });
console.log(obj);
