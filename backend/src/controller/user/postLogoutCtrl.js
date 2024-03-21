export async function postLogoutCtrl(req, res) {
  try {
    console.log(req.verifiedUserClaims.type);
    if (req.verifiedUserClaims.type !== "refresh") {
      throw new Error("Token must be of type 'refresh'");
    }
    console.log(req.session);
    req.session.refreshToken = null;
    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error,
      message: error.message || "Could not logout User",
    });
  }
}
