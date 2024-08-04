export const useSigninGoogle = () => {
    const signinWithGoogle = () => {
        const _window = window.open(
            `${import.meta.env.VITE_API_URL}/auth/google`,
            "_blank",
            "width=500,height=500"
        );

        setTimeout(() => {
            _window?.close();
        }, 5000);
    };

    return { signinWithGoogle };
};
