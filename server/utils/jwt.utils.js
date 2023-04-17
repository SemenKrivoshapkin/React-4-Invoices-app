const symbols = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'

export const generateJWT = () => {
    let jwt = 'HELLOjwt__'
    for (let i = 0; i < 24; i++) {
        jwt += symbols[Math.floor(Math.random() * symbols.length)]
        
    }
    return jwt
}
