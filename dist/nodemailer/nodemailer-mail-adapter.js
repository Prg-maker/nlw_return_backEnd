"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodemailerMailAdapter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const transport = nodemailer_1.default.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "01a6f0502ce6e7",
        pass: "1487778b6dcbde"
    }
});
class NodemailerMailAdapter {
    async sendMail({ body, subject }) {
        await transport.sendMail({
            from: "Equipe Feedback <oi@feedback.com>",
            to: "Daniel Fernandes <df3296709@gmail.com>",
            subject,
            html: body,
        });
    }
}
exports.NodemailerMailAdapter = NodemailerMailAdapter;
