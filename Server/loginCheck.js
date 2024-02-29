const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5001;
const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());


const loginRoute = require("./login");
const signUpRoute = require("./signup");
const otpGenRoute = require("./otpGenerate")
const verifyOtpRoute = require("./otpVerify")
const timelineRoute = require("./timeline")
const sharePostRoute = require("./sharePost")
const profilRoute = require("./profile")
const profilePicRoute = require("./profilePicUpload")
const userProfilesRoute = require("./userProfiles")
const searchRoute = require("./search")
const handleConnections = require("./connectionAccept")
const connectionsListRoute = require("./connections")
const connectionCancelRoute = require("./connectionCancel");
const connectionSendRoute = require("./connectionSend");
const userProfileUpdateRoute = require("./userProfileUpdate")

app.use("/login",loginRoute)
app.use("/save-user-data",signUpRoute)
app.use("/send-email",otpGenRoute )
app.use("/verify-otp",verifyOtpRoute)
app.use("/search",searchRoute)
app.use("/api/post_datas", timelineRoute)
app.use("/uploadPost", sharePostRoute)
app.use("/uploadProfilePic", profilePicRoute)
app.use('/acceptConnections',handleConnections)
app.use("/api/profile_datas", profilRoute)
app.use("/api/user_profiles", userProfilesRoute)
app.use('/connectionList', connectionsListRoute)
app.use('/connectionCancel', connectionCancelRoute)
app.use('/sendRequest', connectionSendRoute)
app.use('/userDataUpdate', userProfileUpdateRoute)

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
