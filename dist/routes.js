"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const submit_feedback_use_case_1 = require("./use-cases/submit-feedback-use-case");
const prisma_feedbacks_repository_1 = require("./repository/prisma/prisma-feedbacks-repository");
const nodemailer_mail_adapter_1 = require("./nodemailer/nodemailer-mail-adapter");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/', (req, res) => {
    return res.json({
        name: 'daniel'
    });
});
routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbackRepository = new prisma_feedbacks_repository_1.PrismaFeedbacksRepository();
    const nodemailerMailAdapter = new nodemailer_mail_adapter_1.NodemailerMailAdapter();
    const submitFeedbackUseCase = new submit_feedback_use_case_1.SubmitFeedbackUseCase(prismaFeedbackRepository, nodemailerMailAdapter);
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot
    });
    return res.status(201).send();
});
