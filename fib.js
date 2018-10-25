function fib(n) {
    if (typeof(n) != "number")
        return null;
    if (n <= 1)
        return n;

    return fib(n - 1) + fib(n - 2);
}