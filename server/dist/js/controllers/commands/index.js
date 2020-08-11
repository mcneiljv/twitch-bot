"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCommand = exports.updateCommand = exports.addCommand = exports.getCommands = void 0;
const command_1 = __importDefault(require("../../models/command"));
const getCommands = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const commands = yield command_1.default.find();
        res.status(200).json({ commands });
    }
    catch (error) {
        throw error;
    }
});
exports.getCommands = getCommands;
const addCommand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const command = new command_1.default({
            name: body.name,
            description: body.description,
            status: body.status,
        });
        const newCommand = yield command.save();
        const allCommands = yield command_1.default.find();
        res.status(201).json({
            message: "Command added successfully!",
            command: newCommand,
            commands: allCommands,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.addCommand = addCommand;
const updateCommand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { params: { id }, body, } = req;
        const updateCommand = yield command_1.default.findByIdAndUpdate({ _id: id }, body);
        const allCommands = yield command_1.default.find();
        res.status(200).json({
            message: "Command updated successfully!",
            command: updateCommand,
            commands: allCommands,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.updateCommand = updateCommand;
const deleteCommand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCommand = yield command_1.default.findByIdAndRemove(req.params.id);
        const allCommands = yield command_1.default.find();
        res.status(200).json({
            message: "Command deleted succesfully!",
            command: deletedCommand,
            commands: allCommands,
        });
    }
    catch (error) {
        throw error;
    }
});
exports.deleteCommand = deleteCommand;
