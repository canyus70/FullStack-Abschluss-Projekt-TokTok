

export const makeJWTAuth = ({ tokenType = "access" }) => {
    const doJWTAuth = catchAsync(
        (req, _, next) => {

        }, { message: "Invalid authorization", status: 401 }
    );
};