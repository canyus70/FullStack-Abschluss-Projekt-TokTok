export function catchAsync(
    controllerFn,
    { message = "Internal server error", status = 500 } = {}
) {
    console.log(controllerFn, message);
    return (req, res, next) => {
        const ctrlResult = controllerFn(req, res, next);
        if (!ctrlResult) {
            return;
        }
        ctrlResult.catch((err) => {
            console.log(err);
            res.status(status).json({
                success: false,
                error: err,
                message: err.message || message,
            });
        });
    };
}