"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const identifier_1 = require("./identifier");
class Builder {
    constructor() {
        this.stack = [];
    }
    scope(value, callback) {
        const bd = this.copy();
        bd.stack.push(value);
        callback(bd);
    }
    copy() {
        const bd = new Builder();
        return bd;
    }
    id(value) {
        const bd = this.copy();
        bd.stack.push(value);
        return new identifier_1.Identifier(bd.stack);
    }
    static id(...value) {
        return new identifier_1.Identifier(value);
    }
}
exports.Builder = Builder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUEwQztBQUUxQyxNQUFhLE9BQU87SUFHbEI7UUFGUSxVQUFLLEdBQWEsRUFBRSxDQUFDO0lBRWQsQ0FBQztJQUVULEtBQUssQ0FBQyxLQUFhLEVBQUUsUUFBK0I7UUFDekQsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNmLENBQUM7SUFFTSxJQUFJO1FBQ1QsTUFBTSxFQUFFLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTSxFQUFFLENBQUMsS0FBYTtRQUNyQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckIsT0FBTyxJQUFJLHVCQUFVLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFTSxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBZTtRQUNqQyxPQUFPLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUF6QkQsMEJBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWRlbnRpZmllciB9IGZyb20gJy4vaWRlbnRpZmllcic7XG5cbmV4cG9ydCBjbGFzcyBCdWlsZGVyIHtcbiAgcHJpdmF0ZSBzdGFjazogc3RyaW5nW10gPSBbXTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHNjb3BlKHZhbHVlOiBzdHJpbmcsIGNhbGxiYWNrOiAoYmQ6IEJ1aWxkZXIpID0+IHZvaWQpIHtcbiAgICBjb25zdCBiZCA9IHRoaXMuY29weSgpO1xuICAgIGJkLnN0YWNrLnB1c2godmFsdWUpO1xuICAgIGNhbGxiYWNrKGJkKTtcbiAgfVxuXG4gIHB1YmxpYyBjb3B5KCk6IEJ1aWxkZXIge1xuICAgIGNvbnN0IGJkID0gbmV3IEJ1aWxkZXIoKTtcbiAgICByZXR1cm4gYmQ7XG4gIH1cblxuICBwdWJsaWMgaWQodmFsdWU6IHN0cmluZyk6IElkZW50aWZpZXIge1xuICAgIGNvbnN0IGJkID0gdGhpcy5jb3B5KCk7XG4gICAgYmQuc3RhY2sucHVzaCh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyKGJkLnN0YWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBzdGF0aWMgaWQoLi4udmFsdWU6IHN0cmluZ1tdKTogSWRlbnRpZmllciB7XG4gICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyKHZhbHVlKTtcbiAgfVxufVxuIl19