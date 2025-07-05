import toast from "react-hot-toast";
import { ToastHotInfo } from "./ToastHotInfo";

export const toastHotAdapter = {
	error: (msg: string) => toast.error(msg),
	success: (msg: string) =>
		toast.success(msg, {
			style: {
				border: "1px solid var(--golden)",
				padding: "16px",
				background: "#fff",
				fontWeight: "bolder",
				fontSize: 18,
				transition:'all 0.3s'
			},
			iconTheme: {
				primary: "var(--golden)",
				secondary: "#000",
			},
			duration: 4000,
			id:'sucess-toast'
		}),
	info: (msg: string) =>
		toast.custom(<ToastHotInfo message={msg} />, {
			id: "custom-info-toast", // impede empilhamento
			duration: 4000,
		}),
};
