import LoginEL from "../utils/LoginEL";
import "./index.css";

const Login=()=>{
const login=LoginEL({
    element:"div",
    style:"height:374px;background-color:; border:1px solid var(--white);",
    className:"p-8 rounded-lg",
    children:[LoginEL({
        element:"div",
        className:"flex justify-center",
        children:LoginEL({
            element:"img",
            src:"https://www.digikala.com/statics/img/svg/logo.svg"
        })
    }),LoginEL({
        element:"div",
        className:"flex justify-end content-center gap-2",
        children:[LoginEL({
            element:"div",
            children:LoginEL({
                element:"h2",
                innerText:"ثبت نام",
                 className:"font-semibold text-xl"
            })
        }),LoginEL({
            element:"div",
                style:"border-left:3px solid black; height:28px"
       
            
        }),LoginEL({
            element:"div",
            children:LoginEL({
                element:"h2",
                innerText:"ورود",
                className:"font-semibold text-xl"
            })

        })]
    }),LoginEL({
        element:"div",
        className:"flex justify-end mt-4",
        style:"color:var(--gray)",
        children:LoginEL({
            element:"p",
            innerText:"!سلام"
        })

    }),LoginEL({
        element:"div",
        className:"flex justify-end mb-4",
        children:LoginEL({
            element:"p",
            innerText:"لطفا شماره موبایل یا ایمیل خود را وارد کنید",
            style:"color:var(--gray)"
        })
        
    }),LoginEL({
        element:"div",
        className:"flex justify-center",
        children:LoginEL({
            element:"form",
            className:"flex flex-col",
            style:"",
            children:[LoginEL({
                element:"input",
                type:"text",
                style:"border:1px solid var(--primary);width:440px; height:48.25px",
                className:"rounded-lg mb-10"

            }),LoginEL({
                element:"input",
                type:"submit",
                value:"ورود",
                style:"background-color:var(--red);color:#fff; width:440px; height:48px",
                className:"flex justify-center content-center rounded-lg font-semibold"
            })]
        })
    }),LoginEL({
        element:"div",
        className:"flex mt-5 mb4 justify-end",
        style:"font-size:15.5px",
        
        children:[LoginEL({
            element:"p",
            innerText:"است"
        }),LoginEL({
            element:"p",
            innerText:"قوانین حریم‌خصوصی",
            style:"color:var(--primary)"
        }),LoginEL({
            element:"p",
            innerText:"و"
        }),LoginEL({
            element:"p",
            style:"color:var(--primary)",
            innerText:"شرایط دیجی‌کالا"
        }),LoginEL({
            element:"p",
            innerText:"ورود شما به معنای پذیرش"
        })]
    })]
})

return login;
}

export default Login;