import { apiConnector } from "../apiConnectors"
import { toast } from "react-hot-toast"
import { endpoints } from "../apis"
import { setLoading, setToken } from "../../slices/authSlice"

const {
  SIGNUP_API,
  LOGIN_API,
} = endpoints;

export function signUp(

  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  domain,
  navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")

    dispatch(setLoading(true))
    try {

      const response = await apiConnector("POST",SIGNUP_API, {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        domain,
        
      })
      // console.log(response.message);
      // console.log("SIGNUP API RESPONSE............", response)

      console.log("response from signUp : ", response);
      if (response.status!==200) {
        throw new Error(response.data.message)
      }
      toast.success("Register Successful")
      navigate("/login")
      
    } catch (error) {
      // console.log("SIGNUP API ERROR............", error)
      toast.error(error.message)
      navigate("/register")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}
export function submission(

    LinkedIn_Profile_Link,
    GitHub_Profile_Link,
    Task1_GitHub_Link,
    Task2_GitHub_Link,
    Task3_GitHub_Link,
    Task1_LinkedIn_Link,
    Task2_LinkedIn_Link,
    Task3_LinkedIn_Link,
    navigate
) {
  return async (dispatch) => {
    const toastId = toast.loading("Loading...")

    dispatch(setLoading(true))
    try {

      const response = await apiConnector("POST", 'http://localhost:4000/api/v2/submission', {
      LinkedIn_Profile_Link,
      GitHub_Profile_Link,
      Task1_GitHub_Link,
      Task2_GitHub_Link,
      Task3_GitHub_Link,
      Task1_LinkedIn_Link,
      Task2_LinkedIn_Link,
      Task3_LinkedIn_Link,
        
      })
      // console.log(response.message);
      // console.log("SUBMISSION API RESPONSE............", response)

      if (!response.success) {
        toast.error('Login Unsuccessful')
        throw new Error(response.message)
      }
      toast.success("Submission Successful")
      navigate("/profile")
      
    } catch (error) {
      // console.log("SIGNUP API ERROR............", error)
      toast.error(error.message)
      navigate("/login")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}

export function login(email, password, navigate) {

  return async (dispatch) => {
    const toastId = toast.loading("Loading...")
    dispatch(setLoading(true))
    try {
      const response = await apiConnector("POST", LOGIN_API, {
        email,
        password,
      })

      console.log("LOGIN API RESPONSE............", response)

      if (response.status!==200) {
        throw new Error(response.data.message)
      }

      // console.log("LOGIN API RESPONSE............ successful")
      toast.success("Login Successful")
      localStorage.setItem("token", JSON.stringify(response.data.token))
      dispatch(setToken(response.token))
      navigate("/")
      window.location.reload();
    } catch (error) {
      // console.log("LOGIN API ERROR............", error)
      toast.error("Login Failed ")
      navigate("/register")
    }
    dispatch(setLoading(false))
    toast.dismiss(toastId)
  }
}



