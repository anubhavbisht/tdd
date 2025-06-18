interface FizzBuzz {
    go(num: number): string
}

export function createFizzBuzz(): FizzBuzz {
    return {
        go: function(num: number): string {
            if (num % 15 === 0) return "FizzBuzz";
            if (num % 5 === 0) return "Buzz";
            if (num % 3 === 0) return "Fizz";
            return num.toString();
        }
    }
}