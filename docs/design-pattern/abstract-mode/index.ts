abstract class People {
    abstract sayLang(): string;
}

class Man extends People implements People{
    sayLang(): string {
        return 'man';
    }
}

class Woman extends People implements People{
    sayLang(): string {
        return 'woman';
    }
}
