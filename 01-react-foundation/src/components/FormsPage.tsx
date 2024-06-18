/* eslint-disable @typescript-eslint/no-unused-vars */
import { useForm } from "react-hook-form"

type FormInputs = {
    email: string,
    password: string
}

export const FormsPage = () => {
    const { register, handleSubmit, formState, watch } = useForm<FormInputs>({
        defaultValues: {
            email: 'joeltoribiopolanco@google.com',
            password: '12345'
        }
    })

    const onSubmit = (myForm: FormInputs) => {
        console.log({ myForm })
    }

    console.log(watch('email'))

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Formularios</h3>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <input type="email" placeholder="Email" {...register('email', { required: true })} />
                    &nbsp;
                    <input type="text" placeholder="Password" {...register('password')} />
                    &nbsp;
                    <button type="submit">Ingresar</button>
                </div>
            </form>

            <pre>
                {JSON.stringify(formState, null, 2)}
            </pre>
        </>
    )
}
