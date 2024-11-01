import { Expense } from "../types";
import { Request, Response } from "express";

export function createExpenseServer(req: Request, res: Response, expenses: Expense[]) {
    const { id, cost, description } = req.body;

    if (!description || !id || !cost) {
        return res.status(400).send({ error: "Missing required fields" });
    }

    const newExpense: Expense = {
        id: id,
        description,
        cost,
    };

    expenses.push(newExpense);
    res.status(201).send(newExpense);
}

export function deleteExpense(req: Request, res: Response, expenses: Expense[]) {
    // TO DO: Implement deleteExpense function

    // const { id, cost, description } = req.body;
    const { id } = req.params;
    // console.log(id);

    if (!id) {
        return res.status(400).send({ error: "Missing required fields" });
    }

    const index = expenses.findIndex((item: Expense) => item.id == id);

    if (index < 0) {
        return res.status(400).send({ error: "id does not exist" });
    }

    expenses.splice(index, 1);
    res.status(201).send("you good");
}

export function getExpenses(req: Request, res: Response, expenses: Expense[]) {
    res.status(200).send({ "data": expenses });
}