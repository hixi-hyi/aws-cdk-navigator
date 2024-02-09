"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Builder = void 0;
const identifier_1 = require("./identifier");
const strings_1 = require("./strings");
class Builder {
    constructor() {
        this.stacks = new strings_1.Strings([]);
    }
    scope(value, callback) {
        const bd = this.copy();
        bd.stacks.push(value);
        callback(bd);
    }
    copy() {
        const bd = new Builder();
        bd.stacks = this.stacks.copy();
        return bd;
    }
    id(value) {
        const bd = this.copy();
        bd.stacks.push(value);
        return new identifier_1.Identifier(bd.stacks.asStrings());
    }
    static id(...value) {
        return new identifier_1.Identifier(value);
    }
}
exports.Builder = Builder;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9idWlsZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDZDQUEwQztBQUMxQyx1Q0FBb0M7QUFFcEMsTUFBYSxPQUFPO0lBR2xCO1FBRlEsV0FBTSxHQUFZLElBQUksaUJBQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUUzQixDQUFDO0lBRVQsS0FBSyxDQUFDLEtBQWEsRUFBRSxRQUErQjtRQUN6RCxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUVNLElBQUk7UUFDVCxNQUFNLEVBQUUsR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTSxFQUFFLENBQUMsS0FBYTtRQUNyQixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEIsT0FBTyxJQUFJLHVCQUFVLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFFTSxNQUFNLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBZTtRQUNqQyxPQUFPLElBQUksdUJBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMvQixDQUFDO0NBQ0Y7QUExQkQsMEJBMEJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSWRlbnRpZmllciB9IGZyb20gJy4vaWRlbnRpZmllcic7XG5pbXBvcnQgeyBTdHJpbmdzIH0gZnJvbSAnLi9zdHJpbmdzJztcblxuZXhwb3J0IGNsYXNzIEJ1aWxkZXIge1xuICBwcml2YXRlIHN0YWNrczogU3RyaW5ncyA9IG5ldyBTdHJpbmdzKFtdKTtcblxuICBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgcHVibGljIHNjb3BlKHZhbHVlOiBzdHJpbmcsIGNhbGxiYWNrOiAoYmQ6IEJ1aWxkZXIpID0+IHZvaWQpIHtcbiAgICBjb25zdCBiZCA9IHRoaXMuY29weSgpO1xuICAgIGJkLnN0YWNrcy5wdXNoKHZhbHVlKTtcbiAgICBjYWxsYmFjayhiZCk7XG4gIH1cblxuICBwdWJsaWMgY29weSgpOiBCdWlsZGVyIHtcbiAgICBjb25zdCBiZCA9IG5ldyBCdWlsZGVyKCk7XG4gICAgYmQuc3RhY2tzID0gdGhpcy5zdGFja3MuY29weSgpO1xuICAgIHJldHVybiBiZDtcbiAgfVxuXG4gIHB1YmxpYyBpZCh2YWx1ZTogc3RyaW5nKTogSWRlbnRpZmllciB7XG4gICAgY29uc3QgYmQgPSB0aGlzLmNvcHkoKTtcbiAgICBiZC5zdGFja3MucHVzaCh2YWx1ZSk7XG4gICAgcmV0dXJuIG5ldyBJZGVudGlmaWVyKGJkLnN0YWNrcy5hc1N0cmluZ3MoKSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGlkKC4uLnZhbHVlOiBzdHJpbmdbXSk6IElkZW50aWZpZXIge1xuICAgIHJldHVybiBuZXcgSWRlbnRpZmllcih2YWx1ZSk7XG4gIH1cbn1cbiJdfQ==