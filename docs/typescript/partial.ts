type MyPartial<O extends Record<string, any>> = {
    [key in keyof O]+?: O[key];
}
