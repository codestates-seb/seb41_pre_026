import { Cookies } from "react-cookie";

class Cookie {
  constructor() {
    this.cookies = new Cookies();
  }

  set(name, value) {
    this.cookies.set(name, value);
    this.listUp(name);
  }

  get(name) {
    return this.cookies.get(name);
  }

  listUp(name) {
    if (this.cookies.get("list") === undefined) {
      this.cookies.set("list", name);
    } else {
      const prev = this.cookies.get("list");
      this.cookies.set("list", `${prev} ${name}`);
    }
  }

  listDown(name) {
    if (this.cookies.get("list").length === 0) {
      this.cookies.remove("list");
    } else {
      this.cookies.set(
        "list",
        this.cookies
          .get("list")
          .split(" ")
          .filter((el) => el !== name)
          .join(" ")
      );
    }
  }

  remove(name) {
    this.cookies.remove(name);
    this.listDown(name);
  }

  status() {
    return this.cookies.get("list").split(" ");
  }
}

export default Cookie;
