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
exports.Cli = void 0;
const prompts = __importStar(require("@inquirer/prompts"));
const table_1 = require("table");
const child_process_1 = require("child_process");
class Cli {
    constructor(opts) {
        this.argv = opts.argv;
        this.command = this.argv[0] || '';
        this.accountId = opts.accountId;
        this.accountAlias = opts.accountAlias;
        this.accountInfo = (0, table_1.table)([
            ['accountId', 'accountAlias'],
            [opts.accountId, opts.accountAlias],
        ]);
    }
    printAwsAccountInfo() {
        console.log(this.accountInfo);
    }
    async confirm(message) {
        const ok = await prompts.confirm({
            message: message || 'Are you sure you want to continue?',
            default: false,
        });
        return ok;
    }
    exec() {
        (0, child_process_1.spawn)('cdk', this.argv, { stdio: 'inherit' });
    }
}
exports.Cli = Cli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUE2QztBQUM3QyxpQ0FBOEI7QUFDOUIsaURBQXNDO0FBT3RDLE1BQWEsR0FBRztJQU9kLFlBQW1CLElBQWdCO1FBQ2pDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNoQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDdEMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFBLGFBQUssRUFBQztZQUN2QixDQUFDLFdBQVcsRUFBRSxjQUFjLENBQUM7WUFDN0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUM7U0FDcEMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLG1CQUFtQjtRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRU0sS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFnQjtRQUNuQyxNQUFNLEVBQUUsR0FBRyxNQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUM7WUFDL0IsT0FBTyxFQUFFLE9BQU8sSUFBSSxvQ0FBb0M7WUFDeEQsT0FBTyxFQUFFLEtBQUs7U0FDZixDQUFDLENBQUM7UUFDSCxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBQSxxQkFBSyxFQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztDQUNGO0FBakNELGtCQWlDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHByb21wdHMgZnJvbSAnQGlucXVpcmVyL3Byb21wdHMnO1xuaW1wb3J0IHsgdGFibGUgfSBmcm9tICd0YWJsZSc7XG5pbXBvcnQgeyBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5pbnRlcmZhY2UgQ2xpT3B0aW9ucyB7XG4gIGFyZ3Y6IHN0cmluZ1tdO1xuICBhY2NvdW50SWQ6IHN0cmluZztcbiAgYWNjb3VudEFsaWFzOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgQ2xpIHtcbiAgcHVibGljIHJlYWRvbmx5IGFyZ3Y6IHN0cmluZ1tdO1xuICBwdWJsaWMgcmVhZG9ubHkgY29tbWFuZDogc3RyaW5nO1xuICBwdWJsaWMgcmVhZG9ubHkgYWNjb3VudElkOiBzdHJpbmc7XG4gIHB1YmxpYyByZWFkb25seSBhY2NvdW50QWxpYXM6IHN0cmluZztcbiAgcHVibGljIHJlYWRvbmx5IGFjY291bnRJbmZvOiBzdHJpbmc7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKG9wdHM6IENsaU9wdGlvbnMpIHtcbiAgICB0aGlzLmFyZ3YgPSBvcHRzLmFyZ3Y7XG4gICAgdGhpcy5jb21tYW5kID0gdGhpcy5hcmd2WzBdIHx8ICcnO1xuICAgIHRoaXMuYWNjb3VudElkID0gb3B0cy5hY2NvdW50SWQ7XG4gICAgdGhpcy5hY2NvdW50QWxpYXMgPSBvcHRzLmFjY291bnRBbGlhcztcbiAgICB0aGlzLmFjY291bnRJbmZvID0gdGFibGUoW1xuICAgICAgWydhY2NvdW50SWQnLCAnYWNjb3VudEFsaWFzJ10sXG4gICAgICBbb3B0cy5hY2NvdW50SWQsIG9wdHMuYWNjb3VudEFsaWFzXSxcbiAgICBdKTtcbiAgfVxuXG4gIHB1YmxpYyBwcmludEF3c0FjY291bnRJbmZvKCk6IHZvaWQge1xuICAgIGNvbnNvbGUubG9nKHRoaXMuYWNjb3VudEluZm8pO1xuICB9XG5cbiAgcHVibGljIGFzeW5jIGNvbmZpcm0obWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IG9rID0gYXdhaXQgcHJvbXB0cy5jb25maXJtKHtcbiAgICAgIG1lc3NhZ2U6IG1lc3NhZ2UgfHwgJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjb250aW51ZT8nLFxuICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgfSk7XG4gICAgcmV0dXJuIG9rO1xuICB9XG5cbiAgcHVibGljIGV4ZWMoKTogdm9pZCB7XG4gICAgc3Bhd24oJ2NkaycsIHRoaXMuYXJndiwgeyBzdGRpbzogJ2luaGVyaXQnIH0pO1xuICB9XG59XG4iXX0=