import {
    TypeOf,
    object, string,
} from "zod";

export const createUserSchema = object({
    body: object({
        name: string({
            required_error: 'Name is required',
        }),
        password: string({
            required_error: 'Password is required',
        }).min(6, "Password too short - should be 6 chars minimum"),
        passwordConfirmation: string({
            required_error: 'Password confirmation is required'
        }),
        email: string({
            required_error: 'Email is required'
        }).email('Invalid email')
        
    // ADD A CHECK TO SEE IF PASSWORDS MATCH AFTER CHECKING THE SCHEMA
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords don't match",
        path: ['passwordConfirmation'],
    }),
});

export type CreateUserInput = Omit<
    TypeOf<typeof createUserSchema>,
    'body.passwordConfirmation'
>;