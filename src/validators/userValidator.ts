import Joi from "joi";

export const userValidator = Joi.object({
    username: Joi.string()
        .min(2)
        .max(10)
        .required()
        .messages({
            'string.min': 'Username must be at least 2 characters',
            'string.max': 'Username must be less than 10 characters',
            'string.required': 'Username is required',
        }),

    password: Joi.string()
        .min(6)
        .max(10)
        .pattern(/[w,d{6}]/)
        .required()
        .messages({
            'string.min': 'Password must be at least 6 characters',
            'string.max': 'Password must be less than 10 characters',
            'string.pattern.base': 'Password must be ...',
            'string.required': 'Password is required',
        }),

    age: Joi.number()
        .min(2)
        .max(50)
        .required()
        .messages({
            'number.min': 'Age must be at least 2 years',
            'number.max': 'Age must be less than 50 years',
            'number.required': 'Age is required',
        })
});

