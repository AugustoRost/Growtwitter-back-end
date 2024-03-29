import { Request, Response } from "express";
import { AuthService } from "../services/auth.service";

const authService = new AuthService();

export class AuthController {
    public async login (request: Request, response: Response) {
        try{
            const {email, password} = request.body

            if (!email || !password){
                return response.status(400).json({
                    sucess: false,
                    code: response.statusCode,
                    message: "Preencha todos os campos obrigatorios."
                })

            }
            const token = await authService.login(email, password)
            return response.status(200).json({
                sucess: true,
                code: response.statusCode,
                message: "Login realizado com sucesso",
                token
            })
        } catch (error){
            return response.status(500).json({
                sucess: false,
                code: response.statusCode,
                message: "Erro ao fazer login"
            })
        }
    }
}