`::suspend


;-- Text Checker ---
MButton::
Send {Ctrl Down}{c}
Sleep, 20
Send {Ctrl Up}
Sleep 20
Send {Alt Down}{Tab}
Sleep 20
Send {Alt Up}
Sleep 20
Send {Ctrl Down}{f}
Sleep, 20
Send {Ctrl Down} {v}
Sleep, 20
Send {Ctrl Up}
Sleep, 20
return

F1::
Send {Ctrl Down}{c}
Sleep, 20
Send {Ctrl Up}
Sleep 20
Send {Alt Down}{Tab}
Sleep 20
Send {Alt Up}
Sleep 20
Send {Ctrl Down}{f}
Sleep, 20
Send {Ctrl Down} {v}
Sleep, 20
Send {Ctrl Up}
Sleep, 20
Send {Alt Down}{Tab}
Sleep 20
Send {Alt Up}
Sleep 20
return

;-- Select all---
F4::
Send {Ctrl Down}{a}
Sleep, 20
Send {Ctrl Up}
Send {Ctrl Down}{c}
Sleep, 20
Send {Ctrl Up}
Sleep 20
Send {Alt Down}{Tab}
Sleep 20
Send {Alt Up}
Sleep 20
Send {Ctrl Down}{f}
Sleep, 20
Send {v}
Sleep, 20
Send {Ctrl Up}
Sleep, 20
return
;-- Copy ---
F2::
Send {Ctrl Down}{c}
Sleep, 20
Send {Ctrl Up}
return

;-- Paste---
F3::
Send {Ctrl Down}{v}
Sleep, 20
Send {Ctrl Up}
return

;-- View Source---
F8::
Send {Ctrl Down}{u}
Sleep, 20
Send {Ctrl Up}
Sleep, 20
Send {Ctrl Down}{f}
Sleep, 20
Send {Ctrl Up}
Sleep, 20
Send {Ctrl Down}{v}
Sleep, 20
Send {Ctrl Up}
return