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
const context_1 = require("./context");
const child_process_1 = require("child_process");
class Cli {
    constructor(opts) {
        this.argv = opts.argv;
        this.command = this.argv[0] || '';
        this.accountId = new context_1.Context(opts.accountId);
        this.accountAlias = new context_1.Context(opts.accountAlias);
        this.accountInfo = (0, table_1.table)([
            ['accountId', 'accountAlias'],
            [opts.accountId, opts.accountAlias],
        ]);
    }
    printAwsAccountInfo() {
        console.log(this.accountInfo);
    }
    async confirm() {
        const ok = await prompts.confirm({
            message: `You will need to confirm to operate on this account.
${this.accountInfo}
Please confirm account infomation before executing.
Are you sure you want to continue? ([y]es/[n]o)`,
            default: false,
        });
        return ok;
    }
    exec() {
        (0, child_process_1.spawn)('cdk', this.argv, { stdio: 'inherit' });
    }
}
exports.Cli = Cli;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJEQUE2QztBQUM3QyxpQ0FBOEI7QUFDOUIsdUNBQW9DO0FBQ3BDLGlEQUFzQztBQU90QyxNQUFhLEdBQUc7SUFPZCxZQUFtQixJQUFnQjtRQUNqQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksaUJBQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGlCQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBQSxhQUFLLEVBQUM7WUFDdkIsQ0FBQyxXQUFXLEVBQUUsY0FBYyxDQUFDO1lBQzdCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3BDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSxtQkFBbUI7UUFDeEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUVNLEtBQUssQ0FBQyxPQUFPO1FBQ2xCLE1BQU0sRUFBRSxHQUFHLE1BQU0sT0FBTyxDQUFDLE9BQU8sQ0FBQztZQUMvQixPQUFPLEVBQUU7RUFDYixJQUFJLENBQUMsV0FBVzs7Z0RBRThCO1lBQzFDLE9BQU8sRUFBRSxLQUFLO1NBQ2YsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU0sSUFBSTtRQUNULElBQUEscUJBQUssRUFBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO0lBQ2hELENBQUM7Q0FDRjtBQXBDRCxrQkFvQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBwcm9tcHRzIGZyb20gJ0BpbnF1aXJlci9wcm9tcHRzJztcbmltcG9ydCB7IHRhYmxlIH0gZnJvbSAndGFibGUnO1xuaW1wb3J0IHsgQ29udGV4dCB9IGZyb20gJy4vY29udGV4dCc7XG5pbXBvcnQgeyBzcGF3biB9IGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5pbnRlcmZhY2UgQ2xpT3B0aW9ucyB7XG4gIGFyZ3Y6IHN0cmluZ1tdO1xuICBhY2NvdW50SWQ6IHN0cmluZztcbiAgYWNjb3VudEFsaWFzOiBzdHJpbmc7XG59XG5leHBvcnQgY2xhc3MgQ2xpIHtcbiAgcHVibGljIHJlYWRvbmx5IGFyZ3Y6IHN0cmluZ1tdO1xuICBwdWJsaWMgcmVhZG9ubHkgY29tbWFuZDogc3RyaW5nO1xuICBwdWJsaWMgcmVhZG9ubHkgYWNjb3VudElkOiBDb250ZXh0O1xuICBwdWJsaWMgcmVhZG9ubHkgYWNjb3VudEFsaWFzOiBDb250ZXh0O1xuICBwdWJsaWMgcmVhZG9ubHkgYWNjb3VudEluZm86IHN0cmluZztcblxuICBwdWJsaWMgY29uc3RydWN0b3Iob3B0czogQ2xpT3B0aW9ucykge1xuICAgIHRoaXMuYXJndiA9IG9wdHMuYXJndjtcbiAgICB0aGlzLmNvbW1hbmQgPSB0aGlzLmFyZ3ZbMF0gfHwgJyc7XG4gICAgdGhpcy5hY2NvdW50SWQgPSBuZXcgQ29udGV4dChvcHRzLmFjY291bnRJZCk7XG4gICAgdGhpcy5hY2NvdW50QWxpYXMgPSBuZXcgQ29udGV4dChvcHRzLmFjY291bnRBbGlhcyk7XG4gICAgdGhpcy5hY2NvdW50SW5mbyA9IHRhYmxlKFtcbiAgICAgIFsnYWNjb3VudElkJywgJ2FjY291bnRBbGlhcyddLFxuICAgICAgW29wdHMuYWNjb3VudElkLCBvcHRzLmFjY291bnRBbGlhc10sXG4gICAgXSk7XG4gIH1cblxuICBwdWJsaWMgcHJpbnRBd3NBY2NvdW50SW5mbygpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLmFjY291bnRJbmZvKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBjb25maXJtKCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IG9rID0gYXdhaXQgcHJvbXB0cy5jb25maXJtKHtcbiAgICAgIG1lc3NhZ2U6IGBZb3Ugd2lsbCBuZWVkIHRvIGNvbmZpcm0gdG8gb3BlcmF0ZSBvbiB0aGlzIGFjY291bnQuXG4ke3RoaXMuYWNjb3VudEluZm99XG5QbGVhc2UgY29uZmlybSBhY2NvdW50IGluZm9tYXRpb24gYmVmb3JlIGV4ZWN1dGluZy5cbkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBjb250aW51ZT8gKFt5XWVzL1tuXW8pYCxcbiAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgIH0pO1xuICAgIHJldHVybiBvaztcbiAgfVxuXG4gIHB1YmxpYyBleGVjKCk6IHZvaWQge1xuICAgIHNwYXduKCdjZGsnLCB0aGlzLmFyZ3YsIHsgc3RkaW86ICdpbmhlcml0JyB9KTtcbiAgfVxufVxuIl19