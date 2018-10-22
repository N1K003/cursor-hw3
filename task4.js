function halfNYTree(n) {
    if (typeof(n) != "number")
        return null;
    if (n == 0)
        return;

    halfNYTree(n - 1);

    let line = "";

    for (let i = 0; i < n; i++) {
        line += "#";
    }
    console.info(line);
}