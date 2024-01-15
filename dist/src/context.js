"use strict";
//import * as v2 from 'constructs';
//import * as v1 from '@aws-cdk/core';
Object.defineProperty(exports, "__esModule", { value: true });
exports.Context = void 0;
class Context {
    get value() {
        return this._value;
    }
    constructor(value) {
        this._value = value;
    }
    //  public static from(s: string): Context {
    //    return new Context(s);
    //  }
    //  public static fromV1(c: v1.Construct, name: string): Context {
    //    return new Context(c.node.tryGetContext(name));
    //  }
    //  public static fromV2(c: v2.Construct, name: string): Context {
    //    return new Context(c.node.tryGetContext(name));
    //  }
    containsIn(...values) {
        return values.includes(this.value);
    }
    containsInWithWarn(...values) {
        if (this.containsIn(...values)) {
            return true;
        }
        console.warn(`Reminder: Action skipped due to context: ${this.value}; executed only for ${values.join(' and ')}.`);
        return false;
    }
    extract(values) {
        if (this.value in values) {
            return values[this.value];
        }
        throw new Error(`Error: could not get values. context: ${this.value}, values:${JSON.stringify(values)}`);
    }
}
exports.Context = Context;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGV4dC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250ZXh0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxtQ0FBbUM7QUFDbkMsc0NBQXNDOzs7QUFFdEMsTUFBYSxPQUFPO0lBRWxCLElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQixDQUFDO0lBQ0QsWUFBWSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFDRCw0Q0FBNEM7SUFDNUMsNEJBQTRCO0lBQzVCLEtBQUs7SUFDTCxrRUFBa0U7SUFDbEUscURBQXFEO0lBQ3JELEtBQUs7SUFDTCxrRUFBa0U7SUFDbEUscURBQXFEO0lBQ3JELEtBQUs7SUFDRSxVQUFVLENBQUMsR0FBRyxNQUFnQjtRQUNuQyxPQUFPLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFDTSxrQkFBa0IsQ0FBQyxHQUFHLE1BQWdCO1FBQzNDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDL0IsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsT0FBTyxDQUFDLElBQUksQ0FBQyw0Q0FBNEMsSUFBSSxDQUFDLEtBQUssdUJBQXVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ25ILE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUNNLE9BQU8sQ0FBSSxNQUE0QjtRQUM1QyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxFQUFFLENBQUM7WUFDekIsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLHlDQUF5QyxJQUFJLENBQUMsS0FBSyxZQUFZLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzNHLENBQUM7Q0FDRjtBQWpDRCwwQkFpQ0MiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCAqIGFzIHYyIGZyb20gJ2NvbnN0cnVjdHMnO1xuLy9pbXBvcnQgKiBhcyB2MSBmcm9tICdAYXdzLWNkay9jb3JlJztcblxuZXhwb3J0IGNsYXNzIENvbnRleHQge1xuICBwcml2YXRlIF92YWx1ZTogc3RyaW5nO1xuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xuICB9XG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLl92YWx1ZSA9IHZhbHVlO1xuICB9XG4gIC8vICBwdWJsaWMgc3RhdGljIGZyb20oczogc3RyaW5nKTogQ29udGV4dCB7XG4gIC8vICAgIHJldHVybiBuZXcgQ29udGV4dChzKTtcbiAgLy8gIH1cbiAgLy8gIHB1YmxpYyBzdGF0aWMgZnJvbVYxKGM6IHYxLkNvbnN0cnVjdCwgbmFtZTogc3RyaW5nKTogQ29udGV4dCB7XG4gIC8vICAgIHJldHVybiBuZXcgQ29udGV4dChjLm5vZGUudHJ5R2V0Q29udGV4dChuYW1lKSk7XG4gIC8vICB9XG4gIC8vICBwdWJsaWMgc3RhdGljIGZyb21WMihjOiB2Mi5Db25zdHJ1Y3QsIG5hbWU6IHN0cmluZyk6IENvbnRleHQge1xuICAvLyAgICByZXR1cm4gbmV3IENvbnRleHQoYy5ub2RlLnRyeUdldENvbnRleHQobmFtZSkpO1xuICAvLyAgfVxuICBwdWJsaWMgY29udGFpbnNJbiguLi52YWx1ZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHZhbHVlcy5pbmNsdWRlcyh0aGlzLnZhbHVlKTtcbiAgfVxuICBwdWJsaWMgY29udGFpbnNJbldpdGhXYXJuKC4uLnZhbHVlczogc3RyaW5nW10pOiBib29sZWFuIHtcbiAgICBpZiAodGhpcy5jb250YWluc0luKC4uLnZhbHVlcykpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjb25zb2xlLndhcm4oYFJlbWluZGVyOiBBY3Rpb24gc2tpcHBlZCBkdWUgdG8gY29udGV4dDogJHt0aGlzLnZhbHVlfTsgZXhlY3V0ZWQgb25seSBmb3IgJHt2YWx1ZXMuam9pbignIGFuZCAnKX0uYCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHB1YmxpYyBleHRyYWN0PFQ+KHZhbHVlczogeyBba2V5OiBzdHJpbmddOiBUIH0pOiBUIHtcbiAgICBpZiAodGhpcy52YWx1ZSBpbiB2YWx1ZXMpIHtcbiAgICAgIHJldHVybiB2YWx1ZXNbdGhpcy52YWx1ZV07XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgRXJyb3I6IGNvdWxkIG5vdCBnZXQgdmFsdWVzLiBjb250ZXh0OiAke3RoaXMudmFsdWV9LCB2YWx1ZXM6JHtKU09OLnN0cmluZ2lmeSh2YWx1ZXMpfWApO1xuICB9XG59XG4iXX0=