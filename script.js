(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const blackScreen = document.getElementById("blackScreenOverlay");
    if (blackScreen) {
      // Force inline styles for maximum priority to ensure overlay works
      blackScreen.style.cssText = `
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                min-width: 100vw !important;
                min-height: 100vh !important;
                background: #000000 !important;
                z-index: 999999 !important;
                display: none;
                opacity: 0;
                pointer-events: all !important;
                margin: 0 !important;
                padding: 0 !important;
            `;
    }
  });

  document.addEventListener(
    "contextmenu",
    function (e) {
      e.preventDefault();
      e.stopPropagation();
      // Show black screen to block screenshot if context menu was for screenshot attempt
      showBlackScreen();
      return false;
    },
    false
  );

  document.addEventListener(
    "keydown",
    function (e) {
      const isScreenshotKey =
        e.keyCode === 44 ||
        (e.metaKey &&
          e.shiftKey &&
          (e.keyCode === 51 || e.keyCode === 52 || e.keyCode === 53)) || // Mac screenshots
        (e.ctrlKey && e.shiftKey && e.keyCode === 83) ||
        (e.metaKey &&
          e.shiftKey &&
          (e.key === "3" || e.key === "4" || e.key === "5")); // Mac screenshots (key value)

      if (isScreenshotKey) {
        showBlackScreen();
        // Force multiple times to ensure black screen shows immediately
        setTimeout(function () {
          showBlackScreen();
        }, 0);
        setTimeout(function () {
          showBlackScreen();
        }, 10);
        setTimeout(function () {
          showBlackScreen();
        }, 50);
      }

      // Block Print Screen key (keyCode 44)
      if (e.keyCode === 44) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }

      // Block F12 (Developer Tools) - keyCode 123
      if (e.keyCode === 123) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }

      // Block Ctrl+Shift+I (Open Developer Tools)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 73) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }

      // Block Ctrl+Shift+J (Open Developer Console)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 74) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }

      // Block Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 67) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }

      // Block Ctrl+U (View Source) - can be used to see HTML content
      if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }

      // Block Ctrl+S (Save Page) - can be used to save HTML with content
      if (e.ctrlKey && e.keyCode === 83) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }

      // Block Ctrl+P (Print) - can be used to save as PDF
      if (e.ctrlKey && e.keyCode === 80) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }

      // Block Ctrl+Shift+P (Command Palette - can open dev tools)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 80) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }

      // Block Alt+Print Screen (Windows screenshot of active window)
      if (e.altKey && e.keyCode === 44) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }

      // Block Windows+Print Screen (Windows 10+ screenshot)
      if (e.keyCode === 91 && e.keyCode === 44) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }

      // Block Ctrl+Shift+S (Snipping Tool - Windows)
      if (e.ctrlKey && e.shiftKey && e.keyCode === 83) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }

      // Block Cmd+Shift+3/4/5 (Mac Screenshot) - Enhanced detection
      // Key codes: 51 = 3, 52 = 4, 53 = 5
      // Also check for key values for better compatibility
      if ((e.metaKey || e.ctrlKey) && e.shiftKey) {
        const key = e.key || String.fromCharCode(e.keyCode);
        const keyCode = e.keyCode;
        const code = e.code || "";

        // Multiple detection methods for Mac screenshots
        if (
          keyCode === 51 ||
          keyCode === 52 ||
          keyCode === 53 ||
          key === "3" ||
          key === "4" ||
          key === "5" ||
          code === "Digit3" ||
          code === "Digit4" ||
          code === "Digit5" ||
          code === "Numpad3" ||
          code === "Numpad4" ||
          code === "Numpad5"
        ) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          showBlackScreen();
          return false;
        }

        // Block Cmd+Shift+4 with Space (Mac window screenshot)
        if (
          (keyCode === 32 || key === " " || code === "Space") &&
          (keyCode === 52 || key === "4" || code === "Digit4")
        ) {
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          showBlackScreen();
          return false;
        }
      }

      // Block F5 (Refresh) - to prevent clearing protection
      if (e.keyCode === 116) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }

      // Block Ctrl+R / Cmd+R (Refresh)
      if ((e.ctrlKey || e.metaKey) && e.keyCode === 82) {
        e.preventDefault();
        e.stopPropagation();
        showBlackScreen();
        return false;
      }
    },
    false
  );

  document.addEventListener(
    "selectstart",
    function (e) {
      e.preventDefault();
      return false;
    },
    false
  );

  document.addEventListener(
    "dragstart",
    function (e) {
      e.preventDefault();
      return false;
    },
    false
  );

  document.addEventListener(
    "drag",
    function (e) {
      e.preventDefault();
      return false;
    },
    false
  );

  document.addEventListener(
    "drop",
    function (e) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    },
    false
  );

  let devToolsOpen = false;
  const threshold = 160; // Threshold for detecting dev tools (pixels)

  setInterval(function () {
    if (
      window.outerHeight - window.innerHeight > threshold ||
      window.outerWidth - window.innerWidth > threshold
    ) {
      if (!devToolsOpen) {
        devToolsOpen = true;
        // Attempt to refocus window
        window.blur();
        window.focus();
      }
    } else {
      devToolsOpen = false;
    }
  }, 500); // Check every 500ms

  document.addEventListener(
    "copy",
    function (e) {
      e.preventDefault();
      e.clipboardData.setData("text/plain", "");
      return false;
    },
    false
  );

  document.addEventListener(
    "cut",
    function (e) {
      e.preventDefault();
      e.clipboardData.setData("text/plain", "");
      return false;
    },
    false
  );

  document.addEventListener(
    "paste",
    function (e) {
      e.preventDefault();
      return false;
    },
    false
  );

  const images = document.querySelectorAll("img");
  images.forEach(function (img) {
    // Prevent context menu on images
    img.addEventListener(
      "contextmenu",
      function (e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      },
      false
    );

    // Prevent drag start on images
    img.addEventListener(
      "dragstart",
      function (e) {
        e.preventDefault();
        return false;
      },
      false
    );
  });

  window.addEventListener(
    "beforeprint",
    function (e) {
      e.preventDefault();
      return false;
    },
    false
  );

  let blackScreenTimeout = null;
  let isBlackScreenActive = false;
  let blackScreenCheckInterval = null;

  function showBlackScreen() {
    const blackScreen = document.getElementById("blackScreenOverlay");
    if (blackScreen) {
      // Use requestAnimationFrame for smooth rendering
      requestAnimationFrame(function () {
        blackScreen.style.cssText = `
                    position: fixed !important;
                    top: 0 !important;
                    left: 0 !important;
                    width: 100vw !important;
                    height: 100vh !important;
                    min-width: 100vw !important;
                    min-height: 100vh !important;
                    background: #000000 !important;
                    z-index: 999999 !important;
                    display: block !important;
                    opacity: 1 !important;
                    visibility: visible !important;
                    pointer-events: all !important;
                    margin: 0 !important;
                    padding: 0 !important;
                    border: none !important;
                `;
        blackScreen.classList.add("active");
        isBlackScreenActive = true;
      });

      // Also set immediately (not waiting for animation frame) for faster response
      blackScreen.style.display = "block";
      blackScreen.style.opacity = "1";
      blackScreen.style.visibility = "visible";
      blackScreen.style.zIndex = "999999";
      blackScreen.style.position = "fixed";
      blackScreen.style.top = "0";
      blackScreen.style.left = "0";
      blackScreen.style.width = "100vw";
      blackScreen.style.height = "100vh";
      blackScreen.style.background = "#000000";
      blackScreen.classList.add("active");
      isBlackScreenActive = true;

      // Clear any existing timeout
      if (blackScreenTimeout) {
        clearTimeout(blackScreenTimeout);
      }

      // Set timeout to hide black screen after some time if page is still visible
      blackScreenTimeout = setTimeout(function () {
        // Only hide if page is visible and has focus for a while
        if (!document.hidden && document.hasFocus()) {
          // Double check before hiding
          setTimeout(function () {
            if (
              !document.hidden &&
              document.hasFocus() &&
              !isBlackScreenActive
            ) {
              hideBlackScreen();
            }
          }, 1000);
        } else {
          // Keep it visible if page is still hidden or no focus
          showBlackScreen();
        }
      }, 15000); // 15 seconds timeout

      // Continuously check and maintain black screen - very frequent
      if (blackScreenCheckInterval) {
        clearInterval(blackScreenCheckInterval);
      }
      blackScreenCheckInterval = setInterval(function () {
        if (isBlackScreenActive && blackScreen) {
          // Force maintain black screen every check
          blackScreen.style.display = "block";
          blackScreen.style.opacity = "1";
          blackScreen.style.zIndex = "999999";
          blackScreen.style.background = "#000000";
          blackScreen.style.position = "fixed";
          blackScreen.style.top = "0";
          blackScreen.style.left = "0";
          blackScreen.style.width = "100vw";
          blackScreen.style.height = "100vh";
        }
      }, 50); // Check every 50ms for fast detection
    }
  }

  /**
   * This function hides the black screen overlay.
   * Only hides if page is visible and has focus.
   */
  function hideBlackScreen() {
    const blackScreen = document.getElementById("blackScreenOverlay");
    if (blackScreen && !document.hidden && document.hasFocus()) {
      blackScreen.classList.remove("active");
      blackScreen.style.display = "none";
      blackScreen.style.opacity = "0";
      isBlackScreenActive = false;
    }
    if (blackScreenTimeout) {
      clearTimeout(blackScreenTimeout);
      blackScreenTimeout = null;
    }
    if (blackScreenCheckInterval) {
      clearInterval(blackScreenCheckInterval);
      blackScreenCheckInterval = null;
    }
  }

  window.addEventListener("load", function () {
    const blackScreen = document.getElementById("blackScreenOverlay");
    if (blackScreen) {
      // Pre-position and style for instant display
      blackScreen.style.cssText = `
                position: fixed !important;
                top: 0 !important;
                left: 0 !important;
                width: 100vw !important;
                height: 100vh !important;
                background: #000000 !important;
                z-index: 999999 !important;
                display: none;
                opacity: 0;
                pointer-events: all !important;
            `;
    }
  });

  /**
   * This function shows a warning and black screen.
   * Used when protection mechanisms are triggered.
   */
  function showWarning(message) {
    showBlackScreen();

    // Force black screen to stay visible with multiple attempts
    setTimeout(function () {
      showBlackScreen();
    }, 10);

    setTimeout(function () {
      showBlackScreen();
    }, 50);

    setTimeout(function () {
      showBlackScreen();
    }, 100);
  }

  const style = document.createElement("style");
  style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
    `;
  document.head.appendChild(style);

  const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
      if (mutation.type === "childList") {
        mutation.addedNodes.forEach(function (node) {
          if (node.nodeType === 1) {
            // Element node
            // Check for common screenshot extension indicators
            const nodeClass = node.className || "";
            const nodeId = node.id || "";
            if (
              nodeClass.includes("screenshot") ||
              nodeId.includes("screenshot") ||
              nodeClass.includes("capture") ||
              nodeId.includes("capture")
            ) {
              node.remove();
            }
          }
        });
      }
    });
  });

  // Start observing the document for changes
  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  document.addEventListener(
    "fullscreenchange",
    function () {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      }
    },
    false
  );

  console.clear();
  console.log("%c WARNING ", "color: red; font-size: 50px; font-weight: bold;");
  console.log(
    "%cThis is a protected page. Screenshot capture and content copying are disabled.",
    "color: red; font-size: 16px;"
  );
  console.log(
    "%cAny attempts to bypass these protections may be logged and reported.",
    "color: red; font-size: 14px;"
  );

  // Override console methods to prevent information leakage
  const originalLog = console.log;
  const originalWarn = console.warn;
  const originalError = console.error;
  const originalInfo = console.info;

  console.log = function () {};
  console.warn = function () {};
  console.error = function () {};
  console.info = function () {};

  let lastFocusTime = Date.now();
  let visibilityChangeCount = 0;

  document.addEventListener(
    "visibilitychange",
    function () {
      if (document.hidden) {
        // Page is hidden - Mac screenshot tool often hides the page
        lastFocusTime = Date.now();
        visibilityChangeCount++;
        showBlackScreen(); // Show black screen immediately when page is hidden
      } else {
        const timeHidden = Date.now() - lastFocusTime;
        // If page was hidden for more than 1 second, might be screenshot/recording
        if (timeHidden > 1000) {
          showBlackScreen(); // Show black screen for suspicious activity

          setTimeout(function () {
            if (!document.hidden) {
              hideBlackScreen();
            }
          }, 3000);
        } else {
          // Hide black screen when page becomes visible again quickly
          setTimeout(function () {
            if (!document.hidden) {
              hideBlackScreen();
            }
          }, 1000);
        }

        // Reset counter after page becomes visible
        if (visibilityChangeCount > 3) {
          visibilityChangeCount = 0;
        }
      }
    },
    false
  );

  window.addEventListener(
    "blur",
    function () {
      window.focus();
    },
    false
  );

  if (navigator.mediaDevices && navigator.mediaDevices.getDisplayMedia) {
    const originalGetDisplayMedia = navigator.mediaDevices.getDisplayMedia.bind(
      navigator.mediaDevices
    );
    navigator.mediaDevices.getDisplayMedia = function (constraints) {
      showBlackScreen(); // Show black screen immediately
      return Promise.reject(
        new DOMException("Screen recording is not allowed.", "NotAllowedError")
      );
    };
  }

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    const originalGetUserMedia = navigator.mediaDevices.getUserMedia.bind(
      navigator.mediaDevices
    );
    navigator.mediaDevices.getUserMedia = function (constraints) {
      // Check if screen capture is requested
      if (constraints && constraints.video) {
        const videoConstraints = constraints.video;
        // Check for screen sharing constraints
        if (
          videoConstraints.mediaSource === "screen" ||
          videoConstraints.mediaSource === "window" ||
          videoConstraints.mediaSource === "application" ||
          (typeof videoConstraints === "object" &&
            videoConstraints.mandatory &&
            videoConstraints.mandatory.chromeMediaSource === "screen")
        ) {
          showBlackScreen(); // Show black screen immediately
          return Promise.reject(
            new DOMException(
              "Screen recording is not allowed.",
              "NotAllowedError"
            )
          );
        }
      }
      // Allow regular camera access but log it
      return originalGetUserMedia(constraints).catch(function (error) {
        return Promise.reject(error);
      });
    };
  }

  if (navigator.getUserMedia) {
    const originalGetUserMedia = navigator.getUserMedia.bind(navigator);
    navigator.getUserMedia = function (
      constraints,
      successCallback,
      errorCallback
    ) {
      if (constraints && constraints.video) {
        const videoConstraints = constraints.video;
        if (
          videoConstraints.mediaSource === "screen" ||
          videoConstraints.mediaSource === "window" ||
          videoConstraints.mediaSource === "application"
        ) {
          showBlackScreen(); // Show black screen immediately
          if (errorCallback) {
            errorCallback(
              new DOMException(
                "Screen recording is not allowed.",
                "NotAllowedError"
              )
            );
          }
          return;
        }
      }
      return originalGetUserMedia(constraints, successCallback, errorCallback);
    };
  }

  if (navigator.webkitGetUserMedia) {
    const originalWebkitGetUserMedia =
      navigator.webkitGetUserMedia.bind(navigator);
    navigator.webkitGetUserMedia = function (
      constraints,
      successCallback,
      errorCallback
    ) {
      if (constraints && constraints.video) {
        const videoConstraints = constraints.video;
        if (
          videoConstraints.mediaSource === "screen" ||
          videoConstraints.mediaSource === "window" ||
          videoConstraints.mediaSource === "application"
        ) {
          showBlackScreen(); // Show black screen immediately
          if (errorCallback) {
            errorCallback(
              new DOMException(
                "Screen recording is not allowed.",
                "NotAllowedError"
              )
            );
          }
          return;
        }
      }
      return originalWebkitGetUserMedia(
        constraints,
        successCallback,
        errorCallback
      );
    };
  }

  if (navigator.mozGetUserMedia) {
    const originalMozGetUserMedia = navigator.mozGetUserMedia.bind(navigator);
    navigator.mozGetUserMedia = function (
      constraints,
      successCallback,
      errorCallback
    ) {
      if (constraints && constraints.video) {
        const videoConstraints = constraints.video;
        if (
          videoConstraints.mediaSource === "screen" ||
          videoConstraints.mediaSource === "window" ||
          videoConstraints.mediaSource === "application"
        ) {
          showBlackScreen(); // Show black screen immediately
          if (errorCallback) {
            errorCallback(
              new DOMException(
                "Screen recording is not allowed.",
                "NotAllowedError"
              )
            );
          }
          return;
        }
      }
      return originalMozGetUserMedia(
        constraints,
        successCallback,
        errorCallback
      );
    };
  }

  setInterval(function () {
    if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
      navigator.mediaDevices
        .enumerateDevices()
        .then(function (devices) {
          // Check for screen capture devices
          const screenDevices = devices.filter(function (device) {
            return (
              device.kind === "videoinput" &&
              (device.label.toLowerCase().includes("screen") ||
                device.label.toLowerCase().includes("display") ||
                device.label.toLowerCase().includes("monitor"))
            );
          });

          if (screenDevices.length > 0) {
            showBlackScreen(); // Show black screen when screen recording detected
          }
        })
        .catch(function () {
          // Silently fail if enumeration is not allowed
        });
    }
  }, 1000);

  if (window.MediaRecorder) {
    const OriginalMediaRecorder = window.MediaRecorder;
    window.MediaRecorder = function (stream, options) {
      // Check if stream contains screen capture tracks
      if (stream && stream.getVideoTracks) {
        const videoTracks = stream.getVideoTracks();
        videoTracks.forEach(function (track) {
          const settings = track.getSettings ? track.getSettings() : {};
          const constraints = track.getConstraints
            ? track.getConstraints()
            : {};

          // Check for screen capture indicators
          if (
            settings.displaySurface ||
            settings.logicalSurface ||
            constraints.mediaSource === "screen" ||
            constraints.mediaSource === "window" ||
            track.label.toLowerCase().includes("screen") ||
            track.label.toLowerCase().includes("display")
          ) {
            showBlackScreen(); // Show black screen immediately
            throw new DOMException(
              "Screen recording is not allowed.",
              "NotAllowedError"
            );
          }
        });
      }
      return new OriginalMediaRecorder(stream, options);
    };
    // Copy static properties
    Object.setPrototypeOf(window.MediaRecorder, OriginalMediaRecorder);
    window.MediaRecorder.prototype = OriginalMediaRecorder.prototype;
  }

  document.addEventListener(
    "keydown",
    function (e) {
      if (e.metaKey && e.shiftKey) {
        // Block number keys 3, 4, 5 (Mac screenshots)
        const key = e.key || String.fromCharCode(e.keyCode);
        const keyCode = e.keyCode;
        const code = e.code || "";

        // Check multiple ways to detect Mac screenshot keys
        if (
          key === "3" ||
          key === "4" ||
          key === "5" ||
          keyCode === 51 ||
          keyCode === 52 ||
          keyCode === 53 ||
          code === "Digit3" ||
          code === "Digit4" ||
          code === "Digit5" ||
          code === "Numpad3" ||
          code === "Numpad4" ||
          code === "Numpad5"
        ) {
          // Show black screen IMMEDIATELY before anything else
          showBlackScreen();
          e.preventDefault();
          e.stopPropagation();
          e.stopImmediatePropagation();
          return false;
        }
      }

      // Also block Cmd+Shift+4 with Space (window screenshot on Mac)
      if (
        e.metaKey &&
        e.shiftKey &&
        (e.keyCode === 32 || e.key === " " || e.code === "Space")
      ) {
        showBlackScreen(); // Show immediately
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
    },
    true
  ); // Use capture phase for earlier interception

  let macRecordingCheckInterval = setInterval(function () {
    // Check if screen recording APIs are being accessed
    if (navigator.mediaDevices) {
      // Try to detect active screen sharing
      navigator.mediaDevices.getDisplayMedia = function () {
        showBlackScreen();
        return Promise.reject(
          new DOMException(
            "Screen recording is not allowed.",
            "NotAllowedError"
          )
        );
      };
    }
  }, 500);

  let blurTimeout = null;
  let lastBlurTime = Date.now();

  window.addEventListener(
    "blur",
    function () {
      lastBlurTime = Date.now();
      showBlackScreen();

      // Clear existing timeout
      if (blurTimeout) {
        clearTimeout(blurTimeout);
      }

      // Set timeout to hide black screen when focus returns
      blurTimeout = setTimeout(function () {
        if (document.hasFocus()) {
          hideBlackScreen();
        }
      }, 3000); // Longer timeout for Mac screenshot tool
    },
    false
  );

  window.addEventListener(
    "focus",
    function () {
      // Check how long window was blurred
      const blurDuration = Date.now() - lastBlurTime;

      // If window was blurred for more than 1 second, might be screenshot tool
      if (blurDuration > 1000) {
        showBlackScreen();
        setTimeout(function () {
          if (document.hasFocus() && !document.hidden) {
            hideBlackScreen();
          }
        }, 2000);
      } else {
        // Hide black screen when window regains focus quickly
        setTimeout(function () {
          if (document.hasFocus() && !document.hidden) {
            hideBlackScreen();
          }
        }, 500);
      }
    },
    false
  );

  let macScreenshotDetection = setInterval(function () {
    // Check if page is hidden (screenshot tool might hide it)
    if (document.hidden) {
      showBlackScreen(); // Keep black screen active
    }

    // Check if window lost focus (screenshot tool takes focus)
    if (!document.hasFocus()) {
      showBlackScreen(); // Keep black screen active
    }

    // Continuously maintain black screen if it's active
    if (isBlackScreenActive) {
      const blackScreen = document.getElementById("blackScreenOverlay");
      if (blackScreen) {
        blackScreen.style.display = "block";
        blackScreen.style.opacity = "1";
        blackScreen.style.zIndex = "999999";
      }
    }
  }, 50);

  console.log("%cProtection initialized", "color: green; font-size: 12px;");
})();
