import { cn } from '@/lib/utils'
import { VariantProps, cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { ButtonHTMLAttributes, FC } from 'react'

//need to recive props from every where cus this will be reusable
//we can make variants of button by using npm i class-variance-authority
//allows us to write classes which can then be used 

const buttonVariants = cva(
    'active:scale-95 inline-flex items-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
    {
        variants:{
            variant:{
                default: 'bg-slate-900 text-white hover:bg-slate-800',
                ghost: 'bg-transparent hover:text-slate-900 hover:bg-slate-200 transition-color'
            },
            size: {
                default: 'h-10 py-2 px-4',//we name it this but the cva doesnt know this should be the default so we need to declare that 
                sm: 'h-9 px-2 ',
                lg: 'h-11 px-8'
            },
           
        },
        defaultVariants: {
            //declare the deafults here
            variant: 'default',
            size:'default',
        },
        
    }
)
//the variant size and stuff in the cva is user defined 
//but the variants are predefined name
//after this we need to apply the deafult variance

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
    isLoading?: boolean
}
//in the above interface we first extend the button props to take props which a normal button in react can take 
//then we also extend it to support the variants we made in the cva
//to do that we need to import the VariantProps first and then give it a generic of the type of whatever we created

const Button: FC<ButtonProps> = ({className, children , variant , size, isLoading , ...props}) => {
  return <button className={cn(buttonVariants({variant, size , className}))} disabled={isLoading}  {...props}>
    {isLoading ? <Loader2 className='h-4 mr-2 w-4 animate-spin'/> : null}
    {children} 
  </button> // the classname is gonna require a utility function because it is going to be conditional. The cn is made in the lib in utils. We made it condtionals because we can overwrite the styles whenever we want to 
}
//the children is basically whatever we are sending besides the props like the text between teh button tag in the components calling this component
export default Button