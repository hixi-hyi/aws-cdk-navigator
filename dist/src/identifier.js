"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Identifier = void 0;
const strings = __importStar(require("./strings"));
class Identifier {
    constructor(stack) {
        this.stack = [];
        this.chains = [];
        this.stack = Array.from(stack);
    }
    chain(value) {
        const id = this.copy();
        id.chains.push(value);
        return id;
    }
    copy() {
        const id = new Identifier(this.stack);
        id.chains = Array.from(this.chains);
        return id;
    }
    get parent() {
        const id = this.copy();
        id.chains.pop();
        return id;
    }
    get stackName() {
        return strings.toPascalCase(this.stack);
    }
    get constructName() {
        return this.chains[this.chains.length - 1];
    }
    get all() {
        return [...this.stack, ...this.chains];
    }
    get pascalName() {
        return strings.toPascalCase(this.all);
    }
    get camelName() {
        return strings.toCamelCase(this.all);
    }
    get snakeName() {
        return strings.toSnakeCase(this.all);
    }
    get kebabName() {
        return strings.toKebabCase(this.all);
    }
    get dotName() {
        return strings.toDotCase(this.all);
    }
    get slashName() {
        return strings.toSlashCase(this.all);
    }
}
exports.Identifier = Identifier;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWRlbnRpZmllci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pZGVudGlmaWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQXFDO0FBRXJDLE1BQWEsVUFBVTtJQUlyQixZQUFZLEtBQWU7UUFIbkIsVUFBSyxHQUFhLEVBQUUsQ0FBQztRQUNyQixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBRzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sS0FBSyxDQUFDLEtBQWE7UUFDeEIsTUFBTSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLEVBQUUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztJQUVNLElBQUk7UUFDVCxNQUFNLEVBQUUsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdEMsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxJQUFXLE1BQU07UUFDZixNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDdkIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNoQixPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBVyxhQUFhO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBRUQsSUFBWSxHQUFHO1FBQ2IsT0FBTyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVELElBQVcsU0FBUztRQUNsQixPQUFPLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQsSUFBVyxTQUFTO1FBQ2xCLE9BQU8sT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELElBQVcsT0FBTztRQUNoQixPQUFPLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxJQUFXLFNBQVM7UUFDbEIsT0FBTyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDO0NBQ0Y7QUE3REQsZ0NBNkRDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgc3RyaW5ncyBmcm9tICcuL3N0cmluZ3MnO1xuXG5leHBvcnQgY2xhc3MgSWRlbnRpZmllciB7XG4gIHByaXZhdGUgc3RhY2s6IHN0cmluZ1tdID0gW107XG4gIHByaXZhdGUgY2hhaW5zOiBzdHJpbmdbXSA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHN0YWNrOiBzdHJpbmdbXSkge1xuICAgIHRoaXMuc3RhY2sgPSBBcnJheS5mcm9tKHN0YWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBjaGFpbih2YWx1ZTogc3RyaW5nKTogSWRlbnRpZmllciB7XG4gICAgY29uc3QgaWQgPSB0aGlzLmNvcHkoKTtcbiAgICBpZC5jaGFpbnMucHVzaCh2YWx1ZSk7XG4gICAgcmV0dXJuIGlkO1xuICB9XG5cbiAgcHVibGljIGNvcHkoKTogSWRlbnRpZmllciB7XG4gICAgY29uc3QgaWQgPSBuZXcgSWRlbnRpZmllcih0aGlzLnN0YWNrKTtcbiAgICBpZC5jaGFpbnMgPSBBcnJheS5mcm9tKHRoaXMuY2hhaW5zKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhcmVudCgpOiBJZGVudGlmaWVyIHtcbiAgICBjb25zdCBpZCA9IHRoaXMuY29weSgpO1xuICAgIGlkLmNoYWlucy5wb3AoKTtcbiAgICByZXR1cm4gaWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHN0YWNrTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHJpbmdzLnRvUGFzY2FsQ2FzZSh0aGlzLnN0YWNrKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY29uc3RydWN0TmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmNoYWluc1t0aGlzLmNoYWlucy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGFsbCgpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIFsuLi50aGlzLnN0YWNrLCAuLi50aGlzLmNoYWluc107XG4gIH1cblxuICBwdWJsaWMgZ2V0IHBhc2NhbE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyaW5ncy50b1Bhc2NhbENhc2UodGhpcy5hbGwpO1xuICB9XG5cbiAgcHVibGljIGdldCBjYW1lbE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gc3RyaW5ncy50b0NhbWVsQ2FzZSh0aGlzLmFsbCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNuYWtlTmFtZSgpOiBzdHJpbmcge1xuICAgIHJldHVybiBzdHJpbmdzLnRvU25ha2VDYXNlKHRoaXMuYWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQga2ViYWJOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0cmluZ3MudG9LZWJhYkNhc2UodGhpcy5hbGwpO1xuICB9XG5cbiAgcHVibGljIGdldCBkb3ROYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0cmluZ3MudG9Eb3RDYXNlKHRoaXMuYWxsKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgc2xhc2hOYW1lKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHN0cmluZ3MudG9TbGFzaENhc2UodGhpcy5hbGwpO1xuICB9XG59XG4iXX0=