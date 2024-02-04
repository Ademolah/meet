import useLoginModal from "@/hooks/useLoginModal";
import { useCallback, useState } from "react";




const LoginModal = () => {
    const loginModal = useLoginModal()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setIsLoading] = useState(false)

    const onSubmit = useCallback(() => {
        try {
            
        } catch (error) {
            
        }
    },[])


    return ( 
        <div>

        </div>
     );
}
 
export default LoginModal;