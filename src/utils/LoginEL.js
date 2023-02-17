const LoginEL=(options)=>{
    const EL=document.createElement(options.element)
    for (const key in options) {
        if(key!=="element"&&key!=="children")
        {
            EL[key]=options[key];
        }
    }
    if(options.children){
        if(Array.isArray(options.children))
        {
        options.children.forEach(element => {
            EL.append(element);
        });
    }
    else{
        EL.append(options.children);
    }
    }

    return EL;
}

export default LoginEL;