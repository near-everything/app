import React, { useRef, useState } from "react";
import { Secondarywhite } from "component/shared/btn";
import Bowser from "bowser";

import {
  MediaPermissionsError,
  MediaPermissionsErrorType,
  requestMediaPermissions,
} from "mic-check";

const browser = Bowser.getParser(window.navigator.userAgent);

enum DialogType {
  explanation = "explanation",

  systemDenied = "systemDenied",
  userDenied = "userDenied",
  trackError = "trackError",
}

const MediaOnboardingDialog: React.FC = () => {
  const [showDialog, setShowDialog] = React.useState<DialogType | null>(null);
  const [havePermissions, setHavePermissions] = useState(false);
  const [audioAllowed, setAudioAllowed] = React.useState<boolean>(false);
  const [videoAllowed, setVideoAllowed] = React.useState<boolean>(false);

  const [errorDetails, setErrorDetails] = React.useState<
    MediaPermissionsError | undefined
  >();

  // Create wrapper refs to access values even during setTimeout
  // https://github.com/facebook/react/issues/14010
  const showDialogRef = useRef(showDialog);
  showDialogRef.current = showDialog;
  const audioAllowedRef = useRef(audioAllowed);
  audioAllowedRef.current = audioAllowed;
  const videoAllowedRef = useRef(videoAllowed);
  videoAllowedRef.current = videoAllowed;

  React.useEffect(() => {
    checkMediaPermissions();
  }, []);

  React.useEffect(() => {
    console.log("audio allowed permission changed: ", audioAllowed);
    if (audioAllowed || videoAllowed) {
      // set the default devices
      // MediaManager.findMediaDevices();
    }
  }, [audioAllowed, videoAllowed]);

  const checkForExplanationDialog = () => {
    if (
      (!audioAllowedRef.current || !videoAllowedRef.current) &&
      showDialogRef.current === null
    )
      setShowDialog(DialogType.explanation);
  };

  const checkMediaPermissions = () => {
    // TODO: listen to if there is a change on the audio/video piece?

    requestMediaPermissions()
      .then(() => {
        setAudioAllowed(true);
        setVideoAllowed(true);
        setShowDialog(null);
      })
      .catch((error: MediaPermissionsError) => {
        console.log("MediaOnboardingDialog: ", error);
        if (error.type === MediaPermissionsErrorType.SystemPermissionDenied) {
          // user denied permission
          setShowDialog(DialogType.systemDenied);
        } else if (
          error.type === MediaPermissionsErrorType.UserPermissionDenied
        ) {
          // browser doesn't have access to devices
          setShowDialog(DialogType.userDenied);
        } else if (
          error.type === MediaPermissionsErrorType.CouldNotStartVideoSource
        ) {
          // most likely when other apps or tabs are using the cam/mic (mostly windows)
          setShowDialog(DialogType.trackError);
        } else {
        }
        setErrorDetails(error);
      });

    setTimeout(() => {
      checkForExplanationDialog();
    }, 500);
  };

  const _renderTryAgain = (text?: string) => {
    return (
      <div style={{ width: "100%", marginTop: 20 }}>
        <button
          onClick={() => {
            if (browser.getBrowserName() === "Safari") {
              // If on Safari, rechecking permissions results in glitches so just refresh the page
              window.location.reload();
            } else {
              checkMediaPermissions();
            }
          }}
          color="primary"
          style={{ float: "right" }}
        >
          {text ? text : "Retry"}
        </button>
      </div>
    );
  };

  const _renderErrorMessage = () => {
    if (!errorDetails) return null;
    return (
      <div style={{ marginTop: 10 }}>
        <p>
          {" "}
          {errorDetails.name}: {errorDetails.message}
        </p>
      </div>
    );
  };

  const _renderExplanationDialog = () => {
    return (
      <div className=" absolute top-[50%] left-[50%] -translate-x-center -translate-y-center text-center">
        <pre className=" text-Body16 ">
          {" We don’t have access to your camera " +
            "\n" +
            "  Go to settings to change the access"}
        </pre>
        <Secondarywhite
          disabled={false}
          type="button"
          size="M"
          className="py-[13px] px-[24px] mt-[19px]"
        >
          <p>change access</p>
        </Secondarywhite>
      </div>
    );
  };

  const _renderUserDeniedDialog = () => {
    const checkForPermission = () => {
      var constraints = { audio: true, video: { width: 1280, height: 720 } };

      navigator.mediaDevices
        .getUserMedia(constraints)
        .then(function (stream) {
          /* use the stream */
        })
        .catch(function (err) {
          /* handle the error */
        });
    };

    // checkForPermission('clipboard-read');
    // checkForPermission('clipboard-write');
    return (
      <div>
        <div className=" absolute top-[50%] left-[50%] -translate-x-center -translate-y-center text-center">
          <pre className=" text-Body16 ">
            {" We don’t have access to your camera " +
              "\n" +
              "  Go to settings to change the access"}
          </pre>
          <Secondarywhite
            disabled={false}
            type="button"
            size="M"
            className="py-[13px] px-[24px] mt-[19px]"
            onClick={() => checkForPermission()}
          >
            <p>change access</p>
          </Secondarywhite>
        </div>
        {/* {_renderErrorMessage()}
        {_renderTryAgain()} */}
      </div>
    );
  };

  const _renderSystemDeniedDialog = () => {
    const settingsDataByOS = {
      macOS: {
        name: "System Preferences",
        link: "x-apple.systempreferences:com.apple.preference.security?Privacy_Camera",
      },
    };

    return (
      <div>
        <p>Can't use your camera or microphone</p>
        <p>
          Your browser might not have access to your camera or microphone. To
          fix this problem, open{" "}
          {
            // @ts-ignore
            settingsDataByOS[browser.getOSName()] ? (
              <a
                onClick={() => {
                  window.open(
                    // @ts-ignore
                    settingsDataByOS[browser.getOSName()].link,
                    "_blank"
                  );
                }}
              >
                {
                  // @ts-ignore
                  settingsDataByOS[browser.getOSName()].name
                }
              </a>
            ) : (
              "Settings"
            )
          }
          .
        </p>
        {/* {_renderErrorMessage()}
        {_renderTryAgain()} */}
      </div>
    );
  };

  const _renderTrackErrorDialog = () => {
    return (
      <div>
        <pre className=" text-Body16">
          {" We don’t have access to your camera " +
            "\n" +
            "  Go to settings to change the access"}
        </pre>

        {/* {_renderErrorMessage()}
        {_renderTryAgain()} */}
      </div>
    );
  };

  const _renderDialogContent = () => {
    switch (showDialog) {
      case DialogType.explanation:
        return _renderExplanationDialog();
      case DialogType.systemDenied:
        return _renderSystemDeniedDialog();
      case DialogType.userDenied:
        return _renderUserDeniedDialog();
      case DialogType.trackError:
        return _renderTrackErrorDialog();
    }
  };
  return <p>{showDialog && _renderDialogContent()}</p>;
};

export default MediaOnboardingDialog;
