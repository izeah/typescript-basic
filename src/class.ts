interface CRUD {
    create(data: any): void | any;
    find(): unknown;
    findByID(id: number): any;
    update(id: number, data: any): void | any;
    delete(id: number): void | any;
}

interface DB {
    open(): void;
    close(): void;
}

class DBConfig {
    host: string;
    port: string;
    user: string;
    pass: string;
    dbName: string;

    constructor(
        host: string,
        port: string,
        user: string,
        pass: string,
        dbName: string
    ) {
        this.host = host;
        this.port = port;
        this.user = user;
        this.pass = pass;
        this.dbName = dbName;
    }
}

// implements inheritance and abstraction
class DBPostgreSQL extends DBConfig implements DB, CRUD {
    sslMode: boolean;
    tz: string;

    constructor(
        host: string,
        port: string,
        user: string,
        pass: string,
        dbName: string,
        sslMode: boolean,
        tz: string
    ) {
        super(host, port, user, pass, dbName);
        this.sslMode = sslMode;
        this.tz = tz;
    }

    open(): void {
        console.log("Successfully connect to DB, dbName : " + this.dbName);
    }

    close(): void {
        console.log("Database Connection closed, dbName : " + this.dbName);
    }

    public create(data: any) {
        console.log("successfully created data :", data);
    }

    public find(): any {
        let data: any = [{}];

        return data;
    }

    public findByID(id: number) {
        console.log("with ID : " + id);
        let data: any = {};

        return data;
    }

    public update(id: number, data: any) {
        console.log("with ID : " + id);
        console.log("successfully updated data :", data);
    }

    public delete(id: number) {
        console.log("with ID : " + id);
        console.log("successfully deleted");
    }
}

let dbConfigurations: {
    [key: string]: DB;
};
dbConfigurations = {
    PGSQL: new DBPostgreSQL(
        "localhost",
        "5432",
        "user",
        "password",
        "db_name",
        false,
        "Asia/Jakarta"
    ),
};

function init(): void {
    for (const k of Object.keys(dbConfigurations)) {
        dbConfigurations[k].open();
    }
}

function getConnection(db: string): DB | void {
    let dbconn = dbConfigurations[db];

    return typeof dbconn !== "undefined"
        ? dbconn
        : console.error("database ga ada");
}

function close(): void {
    for (const k of Object.keys(dbConfigurations)) {
        dbConfigurations[k].close();
    }
}
