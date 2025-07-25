(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ThemeProvider.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "ThemeProvider": (()=>ThemeProvider),
    "useTheme": (()=>useTheme)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
// Define your theme configurations
const themes = {
    light: {
        mode: 'light',
        colors: {
            primary: '#0070f3',
            secondary: '#0ea5e9',
            s_text: 'text-blue-600',
            d_text: 'text-slate-900',
            s_background: 'from-slate-100/80 to-slate-200/80',
            sl_background: 'bg-slate-100',
            c_background: 'bg-slate-100/50',
            a_background: 'from-slate-100 via-blue-100 to-slate-50',
            background: 'bg-slate-50',
            text: '#1f2937',
            accent: '#8b5cf6',
            hover: 'hover:bg-gray-100'
        },
        values: {
            borderRadius: '0.5rem',
            fontSizes: {
                small: '0.875rem',
                medium: '1rem',
                large: '1.25rem'
            },
            spacing: {
                small: '0.5rem',
                medium: '1rem',
                large: '2rem'
            }
        }
    },
    dark: {
        mode: 'dark',
        colors: {
            primary: '#3b82f6',
            secondary: '#0ea5e9',
            s_text: 'text-blue-300',
            d_text: 'text-slate-300',
            s_background: 'from-slate-800/80 to-slate-700/80',
            sl_background: 'bg-slate-900',
            c_background: 'bg-slate-800/50',
            a_background: 'from-slate-900 via-blue-900 to-slate-800',
            background: 'bg-slate-800',
            text: '#f9fafb',
            accent: '#a78bfa',
            hover: 'hover:bg-gray-700'
        },
        values: {
            borderRadius: '0.5rem',
            fontSizes: {
                small: '0.875rem',
                medium: '1rem',
                large: '1.25rem'
            },
            spacing: {
                small: '0.5rem',
                medium: '1rem',
                large: '2rem'
            }
        }
    }
};
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const ThemeProvider = ({ children })=>{
    _s();
    const [themeMode, setThemeMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('light');
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Set theme mode and save to localStorage
    const setTheme = (mode)=>{
        setThemeMode(mode);
        if ("TURBOPACK compile-time truthy", 1) {
            localStorage.setItem('theme', mode);
            applyTheme(mode);
        }
    };
    // Toggle between light and dark theme
    const toggleTheme = ()=>{
        setTheme(themeMode === 'light' ? 'dark' : 'light');
    };
    // Apply theme to document
    const applyTheme = (mode)=>{
        const root = document.documentElement;
        const currentTheme = themes[mode];
        // Apply color variables
        Object.entries(currentTheme.colors).forEach(([key, value])=>{
            if (typeof value === 'string' && value.startsWith('#')) {
                root.style.setProperty(`--color-${key}`, value);
            }
        });
        // Apply other theme values
        root.style.setProperty('--border-radius', currentTheme.values.borderRadius);
        // Apply font sizes
        Object.entries(currentTheme.values.fontSizes).forEach(([key, value])=>{
            root.style.setProperty(`--font-size-${key}`, value);
        });
        // Apply spacing
        Object.entries(currentTheme.values.spacing).forEach(([key, value])=>{
            root.style.setProperty(`--spacing-${key}`, value);
        });
        // Set data attribute for CSS selectors
        root.setAttribute('data-theme', mode);
    };
    // Initialize theme on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            // Check for saved theme preference or system preference
            const savedTheme = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem('theme') : ("TURBOPACK unreachable", undefined);
            const prefersDark = "object" !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
            const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
            setThemeMode(initialTheme);
            applyTheme(initialTheme);
            setMounted(true);
            // Listen for system theme changes
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = {
                "ThemeProvider.useEffect.handleChange": (e)=>{
                    if (!localStorage.getItem('theme')) {
                        const newTheme = e.matches ? 'dark' : 'light';
                        setThemeMode(newTheme);
                        applyTheme(newTheme);
                    }
                }
            }["ThemeProvider.useEffect.handleChange"];
            mediaQuery.addEventListener('change', handleChange);
            return ({
                "ThemeProvider.useEffect": ()=>mediaQuery.removeEventListener('change', handleChange)
            })["ThemeProvider.useEffect"];
        }
    }["ThemeProvider.useEffect"], []);
    // Don't render theme-dependent content until we know the theme
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme: themes[themeMode],
            setTheme,
            toggleTheme
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `${themeMode}-theme`,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/ThemeProvider.tsx",
            lineNumber: 260,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ThemeProvider.tsx",
        lineNumber: 259,
        columnNumber: 5
    }, this);
};
_s(ThemeProvider, "GCh6uYz1Z8MtGcaIiQeNyRK/0Lc=");
_c = ThemeProvider;
const useTheme = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
_s1(useTheme, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/context/WebSocketContext.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// src/contexts/WebSocketContext.tsx
__turbopack_context__.s({
    "WebSocketProvider": (()=>WebSocketProvider),
    "useWebSocket": (()=>useWebSocket)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const WebSocketContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
const WebSocketProvider = ({ children })=>{
    _s();
    const ws = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const messageHandlers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const reconnectAttempts = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(0);
    const isConnected = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    // const reconnectTimeout = useRef<NodeJS.Timeout>();
    const reconnectTimeout = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const connect = ()=>{
        const token = localStorage.getItem('accessToken');
        if (!token) {
            console.log('No access token found, skipping WebSocket connection');
            return;
        }
        if (ws.current) {
            ws.current.close();
        }
        try {
            const wsUrl = `wss://api.blaffa.net/ws/socket?token=${encodeURIComponent(token)}`;
            ws.current = new WebSocket(wsUrl);
            ws.current.onopen = ()=>{
                console.log('WebSocket connected');
                isConnected.current = true;
                reconnectAttempts.current = 0;
            };
            ws.current.onmessage = (event)=>{
                try {
                    const data = JSON.parse(event.data);
                    console.log('WebSocket message received:', data);
                    // const normalizedData = {
                    //   ...data,
                    //   // If data has a data property, use that as the URL
                    //   ...(data.data && { url: data.data })
                    // };
                    messageHandlers.current.forEach((handler)=>handler(data));
                } catch (error) {
                    console.error('Error processing WebSocket message:', error);
                }
            };
            ws.current.onclose = ()=>{
                isConnected.current = false;
                console.log('WebSocket disconnected, attempting to reconnect...');
                const delay = Math.min(1000 * Math.pow(2, reconnectAttempts.current), 30000);
                reconnectAttempts.current++;
                reconnectTimeout.current = setTimeout(connect, delay);
            };
            ws.current.onerror = (error)=>{
                console.error('WebSocket error:', error);
            };
        } catch (error) {
            console.error('WebSocket connection error:', error);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WebSocketProvider.useEffect": ()=>{
            connect();
            return ({
                "WebSocketProvider.useEffect": ()=>{
                    if (ws.current) {
                        ws.current.close();
                    }
                    if (reconnectTimeout.current) {
                        clearTimeout(reconnectTimeout.current);
                    }
                }
            })["WebSocketProvider.useEffect"];
        }
    }["WebSocketProvider.useEffect"], []);
    const addMessageHandler = (handler)=>{
        messageHandlers.current.push(handler);
        return ()=>{
            messageHandlers.current = messageHandlers.current.filter((h)=>h !== handler);
        };
    };
    const sendMessage = (message)=>{
        if (ws.current?.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify(message));
        } else {
            console.error('WebSocket is not connected');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WebSocketContext.Provider, {
        value: {
            addMessageHandler,
            sendMessage,
            isConnected: isConnected.current
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/context/WebSocketContext.tsx",
        lineNumber: 105,
        columnNumber: 5
    }, this);
};
_s(WebSocketProvider, "VU1qDyR+6GKr6/oBfPmrYvBP728=");
_c = WebSocketProvider;
const useWebSocket = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(WebSocketContext);
    if (context === undefined) {
        throw new Error('useWebSocket must be used within a WebSocketProvider');
    }
    return context;
};
_s1(useWebSocket, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "WebSocketProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/i18n.ts [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__),
    "initializeI18n": (()=>initializeI18n)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-i18next'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js [app-client] (ecmascript)");
;
;
;
const resources = {
    en: {
        translation: {
            // General translations
            "Secure 256-bit SSL encryption": "Secure 256-bit SSL encryption",
            //Left side Content
            "Secure Global Payments": "Secure Global Payments",
            "Fast, secure transactions with real-time tracking": "Fast, secure transactions with real-time tracking",
            "Bank-level Security": "Bank-level Security",
            "Simple Payments": "Simple Payments",
            "Mobile Money": "Mobile Money",
            "Simple Payment": "Simple Payment",
            "Mobile Integration": "Mobile IIntegration",
            "Processing Time": "Processing Time",
            "24/7 Support": "24/7 Support",
            "Your trusted partner for secure transactions": "Your trusted partner for secure transactions",
            "Available": "Available",
            "Transaction Smoothness": "Transaction Smoothness",
            "© 2025 Blaffa. All rights reserved .": "© 2025 blaffa. All rights reserved .",
            // Dashboard Header translations
            "Welcome to our amazing platform": "Welcome to our amazing platform",
            "Discover incredible opportunities": "Discover incredible opportunities",
            "DEPOSIT": "DEPOSIT",
            "WITHDRAW": "WITHDRAW",
            "Transaction History": "Transaction History",
            "Hello": "Hello",
            "theme": "theme",
            // AuthForm translations
            "Welcome to Blaffa": "Welcome to Blaffa",
            "Login": "Login",
            "Register": "Register",
            "Full Name": "Full Name",
            "Enter your full name": "Enter your full name",
            "Email": "Email",
            "Enter your email address": "Enter your email address",
            "Phone": "Phone",
            "Enter your phone number": "Enter your phone number",
            "Email or Phone": "Email or Phone",
            "Enter your email or phone": "Enter your email or phone",
            "Password": "Password",
            "Enter your password": "Enter your password",
            "Confirm Password": "Confirm Password",
            "Confirm your password": "Confirm your password",
            "Forgot Password?": "Forgot Password?",
            "Sign In": "Sign In",
            "Invalid email or phone number": "Invalid email or phone number",
            "Invalid email address": "Invalid email address",
            "Invalid phone number": "Invalid phone number",
            "The password must include at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.": "The password must include at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.",
            "Passwords do not match": "Passwords do not match",
            "Login successful! Redirecting to your dashboard...": "Login successful! Redirecting to your dashboard...",
            "Registration successful! Please login.": "Registration successful! Please login.",
            "An unexpected error occurred.": "An unexpected error occurred.",
            "if you cant see it check your Junk folder as well": "if you cant see it check your Junk folder as well",
            "Log in": "Log in",
            "Verify Code": "Verify Code",
            "Confirm New Password": "Confirm New Password",
            "OTP verified successfully": "OTP verified successfully",
            "Create a new password for your account": "Create a new password for your account",
            "if you cant see it check your Junk older as well": "if you cant see it check your Junk older as well",
            "Forgot Password": "Forgot Password",
            "Enter Verification Code": "Enter Verification Code",
            "We sent a code to your email. Please enter it below.": "We sent a code to your email. Please enter it below.",
            "Enter your email to receive a verification code": "Enter your email to receive a verification code",
            "Send Verification Code": "Send Verification Code",
            "Back to Login": "Back to Login",
            "OTP has been sent to your email', 'if you cant see it check your Junk older as well": "OTP has been sent to your email', 'if you cant see it check your Junk older as well",
            // Profile Page translations
            "Profile": "Profile",
            "Edit your personal information here": "Edit your personal information here",
            "Loading profile...": "Loading profile...",
            "Personal Information": "Personal Information",
            "Danger Zone": "Danger Zone",
            "Back": "Back",
            "First Name": "First Name",
            "Last Name": "Last Name",
            "E-mail": "E-mail",
            "Mobile Number": "Mobile Number",
            "Update Details": "Update Details",
            "Reset Password": "Reset Password",
            "Add New Bet ID": "Add New Bet ID",
            "App Name": "App Name",
            "Select App": "Select App",
            "Saved Bet IDs": "Saved Bet IDs",
            "User Bet ID": "User Bet ID",
            "Enter your bet ID": "Enter your bet ID",
            "Add Bet ID": "Add Bet ID",
            "No bet IDs saved yet": "No bet IDs saved yet",
            "Note": "Note",
            "To update your password, enter the old password and the new one you want to use": "To update your password, enter the old password and the new one you want to use",
            "Old Password": "Old Password",
            "New Password": "New Password",
            "Details updated successfully!": "Details updated successfully!",
            "Failed to update details": "Failed to update details",
            "You must be logged in to update your details.": "You must be logged in to update your details.",
            "You must be logged in to change your password.": "You must be logged in to change your password.",
            "New password and confirm password do not match.": "New password and confirm password do not match.",
            "Password changed successfully!": "Password changed successfully!",
            "Failed to change password": "Failed to change password",
            "Delete My Account": "Delete My Account",
            "Delete Account": "Delete Account",
            "Delete Account Permanently": "Delete Account Permanently",
            "Are you sure you want to delete your account? This action cannot be undone.": "Are you sure you want to delete your account? This action cannot be undone.",
            "Account deleted successfully!": "Account deleted successfully!",
            "Warning": "Warning",
            "This action cannot be undone.": "This action cannot be undone.",
            "All your personal data will be permanently deleted.": "All your personal data will be permanently deleted.",
            "You will lose access to all your transactions and account history.": "You will lose access to all your transactions and account history.",
            "Type your email to confirm deletion": "Type your email to confirm deletion",
            "This action will permanently delete your account and all associated data. This cannot be undone.": "This action will permanently delete your account and all associated data. This cannot be undone.",
            "All account data will be immediately erased from our systems.": "All account data will be immediately erased from our systems.",
            "Use strong, unique passwords": "Use strong, unique passwords",
            "Update your password regularly": "Update your password regularly",
            "History": "History",
            "View All": "View All",
            "MY ID": "MY ID",
            // Transaction History translations
            "No transactions found": "No transactions found",
            "You haven't made any transactions yet.": "You haven't made any transactions yet.",
            "Loading transactions...": "Loading transactions...",
            "Failed to fetch transactions": "Failed to fetch transactions",
            "You must be logged in to view transactions.": "You must be logged in to view transactions.",
            "Failed to load transactions. Please try again.": "Failed to load transactions. Please try again.",
            "All": "All",
            "Deposits": "Deposits",
            "Withdraw": "Withdraw",
            "See more": "See more",
            "Transaction Details": "Transaction details",
            "Payment Method": "Payment Method",
            "For deposits": "For deposits",
            "Status": "Status",
            "Number": "Number",
            "Transaction Date": "Transaction Date",
            "Transaction ID": "Transaction ID",
            "Close": "Close",
            // Notification translations
            "Notifications": "Notifications",
            "No notifications found": "No notifications found",
            "Loading notifications...": "Loading notifications...",
            "Failed to fetch notifications": "Failed to fetch notifications",
            "You must be logged in to view notifications.": "You must be logged in to view notifications.",
            "Failed to load notifications. Please try again.": "Failed to load notifications. Please try again.",
            "Mark all as read": "Mark all as read",
            "Load more": "Load more",
            "Loading...": "Loading...",
            "Mark as read": "Mark as read",
            "Mark as unread": "Mark as unread",
            "Available Coupons": "Available Coupons",
            "No Coupons Available": "No Coupons Available",
            "Check back later!": "Check back later!",
            // Withdraw Page translations
            "Withdraw Funds": "Withdraw Funds",
            "Withdraw from your account": "Withdraw from your account",
            "Please fill in all fields": "Please fill in all fields",
            "Phone numbers do not match": "Phone numbers do not match",
            "Withdrawal request submitted successfully!": "Withdrawal request submitted successfully!",
            "Something went wrong. Please try again.": "Something went wrong. Please try again.",
            "Network error. Please check your connection and try again.": "Network error. Please check your connection and try again.",
            "Take Note": "Take Note",
            "The currency of your account must be in XOF": "The currency of your account must be in XOF",
            "CITY": "CITY",
            "STREET": "STREET",
            "ID": "ID",
            "Enter ID": "Enter ID",
            "Withdrawal Code": "Withdrawal Code",
            "Enter your withdrawal code": "Enter your withdrawal code",
            "Enter number": "Enter number",
            "Confirm Number": "Confirm Number",
            "Enter Confirm number": "Enter Confirm number",
            "Network": "Network",
            "Processing...": "Processing...",
            "Submit my request": "Submit my request",
            //Deposit Page translations
            "Deposit Funds": "Deposit Funds",
            "Select Network": "Select Network",
            "Select Bet ID": "Select Bet ID",
            "Enter Details": "Enter Details",
            "Select Your Betting Platform": "Select Your Betting Platform",
            "Back to Bet IDs": "Back to Bet IDs",
            "Phone Number": "Phone Number",
            "Submit": "Submit",
            "Click to continue payment": "Click to continue payment",
            "Make deposits to your account": "Make deposits to your account",
            "Make your deposits to your account here": "Make your deposits to your account here",
            "IMPORTANT": "IMPORTANT",
            "Your account currency must be in XOF.": "Your account currency must be in XOF.",
            "Enter your ID": "Enter your ID",
            "Enter or select your betting app ID": "Enter or select your betting app ID",
            "This is your 1xbet user ID": "This is your 1xbet user ID",
            "Enter your betting app ID or select from saved IDs.": "Enter your betting app ID or select from saved IDs.",
            "You are entering a new ID. Defaulting to 1xbet app.": "You are entering a new ID. Defaulting to 1xbet app.",
            "Saved IDs": "Saved IDs",
            "Selected App": "Select App id",
            "Betting App ID": "Betting App ID",
            "Unknown App": "Unknown ",
            "Amount": "Amount",
            "Enter deposit amount": "Enter deposit amount",
            "Selected Bet ID": "Selected Bet ID",
            "Enter your mobile money number": "Enter your mobile money number",
            "Your mobile money number": "Your mobile money number",
            "Please select a network": "Please select a network",
            "Proceed": "Proceed",
            "Deposit successful! Transaction ID:": "Deposit successful! Transaction ID:",
            "Failed to load necessary data. Please try again later.": "Failed to load necessary data. Please try again later.",
            "Error fetching data:": "Error fetching data:",
            "Error processing deposit:": "Error processing deposit:",
            "Failed to process deposit. Please try again.": "Failed to process deposit. Please try again.",
            "You must be logged in to access this feature.": "You must be logged in to access this feature.",
            // Modal and Bet ID management translations
            "Confirmer l'ID de pari": "Confirmer l'ID de pari",
            "Confirm Bet ID": "Confirm Bet ID",
            "Nom de l'utilisateur": "Nom de l'utilisateur",
            "User Name": "User Name",
            "ID de pari": "ID de pari",
            "Bet ID": "Bet ID",
            "Appareil": "Appareil",
            "Device": "Device",
            "Annuler": "Annuler",
            "Cancel": "Cancel",
            "Confirmer": "Confirmer",
            "Confirm": "Confirm",
            "ID de pari invalide": "ID de pari invalide",
            "Invalid Bet ID": "Invalid Bet ID",
            "L'ID de pari est invalide ou n'existe pas.": "L'ID de pari est invalide ou n'existe pas.",
            "Bet ID is invalid or does not exist.": "Bet ID is invalid or does not exist.",
            "Échec de la validation de l'ID de pari. Veuillez réessayer.": "Échec de la validation de l'ID de pari. Veuillez réessayer.",
            "Failed to validate Bet ID. Please try again.": "Failed to validate Bet ID. Please try again.",
            "ID de pari ajouté avec succès !": "ID de pari ajouté avec succès !",
            "Bet ID added successfully!": "Bet ID added successfully!",
            "Fermer": "Fermer",
            "Failed to add bet ID": "Failed to add bet ID",
            "Veuillez sélectionner une application et saisir un ID de pari.": "Veuillez sélectionner une application et saisir un ID de pari.",
            "Please select an app and enter a bet ID.": "Please select an app and enter a bet ID.",
            "Vous devez être connecté pour ajouter un ID de pari.": "Vous devez être connecté pour ajouter un ID de pari.",
            "You must be logged in to add a bet ID.": "You must be logged in to add a bet ID.",
            "No account was found with the ID {{betid}}. Make sure it is spelled correctly and try again.": "No account was found with the ID {{betid}}. Make sure it is spelled correctly and try again.",
            "Transaction initiated successfully!": "Transaction initiated successfully!"
        }
    },
    fr: {
        translation: {
            // General translations
            "Secure 256-bit SSL encryption": "Chiffrement SSL 256 bits sécurisé",
            //Left side Content
            "Secure Global Payments": "Paiements mondiaux sécurisés",
            "Fast, secure transactions with real-time tracking": "Transactions rapides et sécurisées avec suivi en temps réel",
            "Bank-level Security": "Sécurité de niveau bancaire",
            "Mobile Money": "Argent mobile",
            "Simple Payment": "Paiement simple",
            "Mobile Integration": "Intégration mobile",
            "Payments made easy": "Paiements faciles",
            "24/7 Support": "Support 24/7",
            "Available": "Disponible",
            "Transaction Smoothness": "Fluidité de la transaction",
            "Processing Time": "Temps de traitement",
            "© 2025 Blaffa. All rights reserved .": "© 2025 Blaffa. Tous droits réservés.",
            "theme": "thème",
            // Dashboard Header translations
            "DEPOSIT": "DÉPOSER",
            "WITHDRAW": "RETIRER",
            "Transaction History": "Historique des transactions",
            "Logout": "Déconnexion",
            "Hello": "Bonjour",
            "History": "Historique",
            "View All": "Voir tout",
            "MY ID": "MON ID",
            //Hero
            "Welcome to our amazing platform": "Bienvenue sur notre incroyable plateforme",
            "Discover incredible opportunities": "Découvrez des opportunités incroyables",
            // AuthForm translations
            "Welcome to Blaffa": "Bienvenue sur Blaffa",
            "Login": "Connexion",
            "Register": "Inscription",
            "Full Name": "Nom complet",
            "Enter your full name": "Entrez votre nom complet",
            "Email": "Email",
            "Enter your email address": "Entrez votre adresse email",
            "Phone": "Téléphone",
            "Enter your phone number": "Entrez votre numéro de téléphone",
            "Email or Phone": "Email ou Téléphone",
            "Enter your email or phone": "Entrez votre email ou téléphone",
            "Password": "Mot de passe",
            "Enter your password": "Entrez votre mot de passe",
            "Confirm Password": "Confirmez le mot de passe",
            "Confirm your password": "Confirmez votre mot de passe",
            "Forgot Password?": "Mot de passe oublié ?",
            "Sign In": "Se connecter",
            "Invalid email or phone number": "Email ou numéro de téléphone invalide",
            "Invalid email address": "Adresse email invalide",
            "Invalid phone number": "Numéro de téléphone invalide",
            "The password must include at least one uppercase letter, one lowercase letter, one digit, and be at least 6 characters long.": "Le mot de passe doit inclure au moins une lettre majuscule, une lettre minuscule, un chiffre et comporter au moins 6 caractères.",
            "Passwords do not match": "Les mots de passe ne correspondent pas",
            "Login successful! Redirecting to your dashboard...": "Connexion réussie ! Redirection vers votre tableau de bord...",
            "Registration successful! Please login.": "Inscription réussie ! Veuillez vous connecter.",
            "An unexpected error occurred.": "Une erreur inattendue s'est produite.",
            "if you cant see it check your Junk folder as well": "si vous ne le voyez pas, vérifiez également votre dossier indésirable",
            "Log in": "Se connecter",
            "Verify Code": "Vérifier le code",
            "Confirm New Password": "Confirmez le nouveau mot de passe",
            "OTP verified successfully": "OTP vérifié avec succès",
            "Create a new password for your account": "Créez un nouveau mot de passe pour votre compte",
            "if you cant see it check your Junk older as well": "si vous ne le voyez pas, vérifiez également votre dossier indésirable",
            "Forgot Password": "Mot de passe oublié",
            "Enter Verification Code": "Entrez le code de vérification",
            "We sent a code to your email. Please enter it below.": "Nous avons envoyé un code à votre email. Veuillez l'entrer ci-dessous.",
            "Enter your email to receive a verification code": "Entrez votre email pour recevoir un code de vérification",
            "Send Verification Code": "Envoyer le code de vérification",
            "Back to Login": "Retour à la connexion",
            "OTP has been sent to your email', 'if you cant see it check your Junk older as well": "OTP a été envoyé à votre email', 'si vous ne le voyez pas, vérifiez également votre dossier indésirable",
            // Profile Page translations
            "Profile": "Profil",
            "Edit your personal information here": "Modifiez vos informations personnelles ici",
            "Loading profile...": "Chargement du profil...",
            "Personal Information": "Informations personnelles",
            "Danger Zone": "Zone de danger",
            "Back": "Retour",
            "First Name": "Prénom",
            "Last Name": "Nom",
            "E-mail": "E-mail",
            "Mobile Number": "Numéro de téléphone",
            "Update Details": "Mettre à jour les informations",
            "Reset Password": "Réinitialiser le mot de passe",
            "Add New Bet ID": "Ajouter un nouvel identifiant de pari",
            "App Name": "Nom de l'application",
            "Select App": "Sélectionner l'application",
            "Saved Bet IDs": "Identifiants de pari enregistrés",
            "User Bet ID": "Identifiant de pari utilisateur",
            "Enter your bet ID": "Saisir votre identifiant de pari",
            "Add Bet ID": "Ajouter un identifiant de pari",
            "No bet IDs saved yet": "Aucun identifiant de pari enregistré pour le moment",
            "Note": "Remarque",
            "To update your password, enter the old password and the new one you want to use": "Pour mettre à jour votre mot de passe, entrez l'ancien mot de passe et le nouveau que vous souhaitez utiliser",
            "Old Password": "Ancien mot de passe",
            "New Password": "Nouveau mot de passe",
            "Details updated successfully!": "Informations mises à jour avec succès !",
            "Failed to update details": "Échec de la mise à jour des informations",
            "You must be logged in to update your details.": "Vous devez être connecté pour mettre à jour vos informations.",
            "You must be logged in to change your password.": "Vous devez être connecté pour changer votre mot de passe.",
            "New password and confirm password do not match.": "Le nouveau mot de passe et la confirmation ne correspondent pas.",
            "Password changed successfully!": "Mot de passe changé avec succès !",
            "Failed to change password": "Échec du changement de mot de passe",
            "Delete My Account": "Supprimer mon compte",
            "Delete Account": "Supprimer compte",
            "Are you sure you want to delete your account? This action cannot be undone.": "Êtes-vous sûr de vouloir supprimer votre compte ? Cette action ne peut pas être annulée.",
            "Account deleted successfully!": "Compte supprimé avec succès !",
            "Warning": "Avertissement",
            "This action cannot be undone.": "Cette action ne peut pas être annulée.",
            "Failed to delete account": "Échec de la suppression du compte",
            "You must be logged in to delete your account.": "Vous devez être connecté pour supprimer votre compte.",
            "You must be logged in to view your account details.": "Vous devez être connecté pour voir les détails de votre compte.",
            "All your personal data will be permanently deleted.": "Toutes vos données personnelles seront définitivement supprimées.",
            "You will lose access to all your transactions and account history.": "Vous perdrez l'accès à toutes vos transactions et à l'historique de votre compte.",
            "Type your email to confirm deletion": "Tapez votre email pour confirmer la suppression",
            "This action will permanently delete your account and all associated data. This cannot be undone.": "Cette action supprimera définitivement votre compte et toutes les données associées. Cela ne peut pas être annulé.",
            "All account data will be immediately erased from our systems.": "Toutes les données du compte seront immédiatement effacées de nos systèmes.",
            "Are you sure you want to delete your account?": "Êtes-vous sûr de vouloir supprimer votre compte ?",
            "Use strong, unique passwords": "Utilisez des mots de passe forts et uniques",
            "Update your password regularly": "Mettez à jour votre mot de passe régulièrement",
            "Your password has been reset successfully!": "Votre mot de passe a été réinitialisé avec succès !",
            "Your password has been updated successfully!": "Votre mot de passe a été mis à jour avec succès !",
            "Your password has been updated successfully.": "Votre mot de passe a été mis à jour avec succès.",
            "Check back later!": "Revoyez plus tard !",
            "No Coupons Available": "Aucun coupon disponible",
            "Available Coupons": "Coupons disponibles",
            // Transaction History translations
            "No transactions found": "Aucune transaction trouvée",
            "You haven't made any transactions yet.": "Vous n'avez pas encore fait de transactions.",
            "Loading transactions...": "Chargement des transactions...",
            "Failed to fetch transactions": "Échec de la récupération des transactions",
            "You must be logged in to view transactions.": "Vous devez être connecté pour voir les transactions.",
            "Failed to load transactions. Please try again.": "Échec du chargement des transactions. Veuillez réessayer.",
            "All": "Tous",
            "Deposit": "Dépôt",
            "Withdraw": "Retrait",
            "See more": "Voir plus",
            "Transaction Details": "Détails de la transaction",
            "Payment Method": "Méthode de paiement",
            "For deposits": "Pour les dépôts",
            "Status": "Statut",
            "Number": "Numéro",
            "Transaction Date": "Date de la transaction",
            "Transaction ID": "ID de la transaction",
            "Close": "Fermer",
            // Notification translations
            "Notifications": "Notifications",
            "No notifications found": "Aucune notification trouvée",
            "Loading notifications...": "Chargement des notifications...",
            "Failed to fetch notifications": "Échec de la récupération des notifications",
            "You must be logged in to view notifications.": "Vous devez être connecté pour voir les notifications.",
            "Failed to load notifications. Please try again.": "Échec du chargement des notifications. Veuillez réessayer.",
            "Mark all as read": "Tout marquer comme lu",
            "Load more": "Charger plus",
            "Loading...": "Chargement...",
            "Mark as read": "Marquer comme lu",
            "Mark as unread": "Marquer comme non lu",
            // Withdraw Page translations
            "Phone Number": "Numéro de téléphone",
            "Withdraw from your account": "Retirer de votre compte",
            "Please fill in all fields": "Veuillez remplir tous les champs",
            "Phone numbers do not match": "Les numéros de téléphone ne correspondent pas",
            "Withdrawal request submitted successfully!": "Demande de retrait soumise avec succès !",
            "Something went wrong. Please try again.": "Une erreur s'est produite. Veuillez réessayer.",
            "Network error. Please check your connection and try again.": "Erreur réseau. Veuillez vérifier votre connexion et réessayer.",
            "Take Note": "Prenez note",
            "The currency of your account must be in XOF": "La devise de votre compte doit être en XOF",
            "CITY": "VILLE",
            "STREET": "RUE",
            "ID": "ID",
            "Enter ID": "Entrez l'ID",
            "Withdrawal Code": "Code de retrait",
            "Enter your withdrawal code": "Entrez votre code de retrait",
            "Enter number": "Entrez le numéro",
            "Confirm Number": "Confirmez le numéro",
            "Enter Confirm number": "Entrez le numéro de confirmation",
            "Network": "Réseau",
            "Processing...": "Traitement...",
            "Submit my request": "Soumettre ma demande",
            "Withdraw Funds": "Retirer des fonds",
            // Deposit Page translations
            "Deposit Funds": "Déposer des fonds",
            "Select Bet ID": "Sélectionnez l'ID de pari",
            "Enter Details": "Entrez les détails",
            "Select Network": "Sélectionnez le réseau",
            "Select Your Betting Platform": "Sélectionnez votre plateforme de paris",
            "Back to Bet IDs": "Retour aux ID de pari",
            "Selected Bet ID": "ID de pari sélectionné",
            "Submit": "Soumettre",
            "Deposit to your account": "Déposez sur votre compte",
            "Deposit to your account here": "Déposez sur votre compte ici",
            "Click to continue payment": "Cliquez pour continuer le paiement",
            "Make deposits to your account": "Effectuez des dépôts sur votre compte",
            "Make your deposits to your account here": "Effectuez vos dépôts sur votre compte ici",
            "IMPORTANT": "IMPORTANT",
            "Your account currency must be in XOF.": "La devise de votre compte doit être en XOF.",
            "Enter your 1xbet user ID": "Entrez votre ID utilisateur 1xbet",
            "Enter your ID": "Entrez votre ID",
            "Enter or select your betting app ID": "Entrez ou sélectionnez votre ID de l'application de paris",
            "Enter your betting app ID or select from saved IDs.": " Entrez votre ID de l'application de paris ou sélectionnez-en un enregistré.",
            "Selected App": "Sélectionnez l'ID",
            "Saved IDs": "IDs enregistrés",
            "Unknown App": "Appareil inconnu",
            "This is your 1xbet user ID": "Ceci est votre ID utilisateur 1xbet",
            "Amount": "Montant",
            "Enter deposit amount": "Entrez le montant du dépôt",
            "Enter your mobile money number": "Entrez votre numéro de mobile money",
            "Your mobile money number": "Votre numéro de mobile money",
            "Please select a network": "Veuillez sélectionner un réseau",
            "Proceed": "Procéder",
            "Deposit successful! Transaction ID:": "Dépôt réussi ! ID de transaction :",
            "Failed to load necessary data. Please try again later.": "Échec du chargement des données nécessaires. Veuillez réessayer plus tard.",
            "Error fetching data:": "Erreur lors de la récupération des données :",
            "Error processing deposit:": "Erreur lors du traitement du dépôt :",
            "Failed to process deposit. Please try again.": "Échec du traitement du dépôt. Veuillez réessayer.",
            "You must be logged in to access this feature.": "Vous devez être connecté pour accéder à cette fonctionnalité.",
            // Modal and Bet ID management translations
            "Confirmer l'ID de pari": "Confirmer l'ID de pari",
            "Confirm Bet ID": "Confirm Bet ID",
            "Nom de l'utilisateur": "Nom de l'utilisateur",
            "User Name": "User Name",
            "ID de pari": "ID de pari",
            "Bet ID": "Bet ID",
            "Appareil": "Appareil",
            "Device": "Device",
            "Annuler": "Annuler",
            "Cancel": "Cancel",
            "Confirmer": "Confirmer",
            "Confirm": "Confirm",
            "ID de pari invalide": "ID de pari invalide",
            "Invalid Bet ID": "Invalid Bet ID",
            "L'ID de pari est invalide ou n'existe pas.": "L'ID de pari est invalide ou n'existe pas.",
            "Bet ID is invalid or does not exist.": "Bet ID is invalid or does not exist.",
            "Échec de la validation de l'ID de pari. Veuillez réessayer.": "Échec de la validation de l'ID de pari. Veuillez réessayer.",
            "Failed to validate Bet ID. Please try again.": "Failed to validate Bet ID. Please try again.",
            "ID de pari ajouté avec succès !": "ID de pari ajouté avec succès !",
            "Bet ID added successfully!": "Bet ID added successfully!",
            "Fermer": "Fermer",
            "Failed to add bet ID": "Échec de l'ajout de l'ID de pari",
            "Veuillez sélectionner une application et saisir un ID de pari.": "Veuillez sélectionner une application et saisir un ID de pari.",
            "Please select an app and enter a bet ID.": "Please select an app and enter a bet ID.",
            "Vous devez être connecté pour ajouter un ID de pari.": "Vous devez être connecté pour ajouter un ID de pari.",
            "You must be logged in to add a bet ID.": "You must be logged in to add a bet ID.",
            "No account was found with the ID {{betid}}. Make sure it is spelled correctly and try again.": "Aucun compte n'a été trouvé avec l'ID {{betid}}. Vérifiez l'orthographe et réessayez.",
            "Transaction initiated successfully!": "Transaction initiée avec succès !"
        }
    }
};
const initializeI18n = ()=>{
    // Configuration for i18next
    const config = {
        resources,
        lng: 'fr',
        fallbackLng: 'fr',
        supportedLngs: [
            'fr',
            'en'
        ],
        interpolation: {
            escapeValue: false
        },
        detection: {
            order: [
                'localStorage',
                'navigator'
            ],
            lookupLocalStorage: 'i18nextLng',
            caches: [
                'localStorage'
            ]
        }
    };
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].use(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2d$browser$2d$languagedetector$2f$dist$2f$esm$2f$i18nextBrowserLanguageDetector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]).use(initReactI18next).init(config);
    // .init({
    //   resources,
    //   fallbackLng: 'fr',
    //   supportedLngs: ['en', 'fr'],
    //   interpolation: {
    //     escapeValue: false,
    //   },
    //   detection: {
    //     order: ['localStorage', 'navigator'],
    //     lookupLocalStorage: 'i18nextLng',
    //     caches: ['localStorage'],
    //   },
    // });
    // Set default language if not set
    if ("TURBOPACK compile-time truthy", 1) {
        const savedLanguage = localStorage.getItem('i18nextLng');
        if (!savedLanguage) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].changeLanguage('fr');
            localStorage.setItem('i18nextLng', 'fr');
        }
    }
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
};
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$i18next$2f$dist$2f$esm$2f$i18next$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/layout.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
// 'use client';
// import React from 'react';
// import { ThemeProvider } from '../components/ThemeProvider';
// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });
// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
//       <body className="antialiased">
//         <ThemeProvider>
//           <div className="min-h-screen">
//             <main>{children}</main>
//           </div>
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
__turbopack_context__.s({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ThemeProvider.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WebSocketContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/WebSocketContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'react-i18next'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/i18n.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
// Initialize i18n
const i18n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$i18n$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["initializeI18n"])();
function LayoutContent({ children }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LayoutContent.useEffect": ()=>{
            // Set language from localStorage or default to 'fr'
            const lang = localStorage.getItem('i18nextLng') || 'fr';
            i18n.changeLanguage(lang);
            // Update HTML lang attribute
            document.documentElement.lang = lang;
        }
    }["LayoutContent.useEffect"], [
        pathname,
        searchParams
    ]);
    //return <>{children}</>;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
            children: children
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 70,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 69,
        columnNumber: 5
    }, this);
}
_s(LayoutContent, "h6p6PpCFmP4Mu5bIMduBzSZThBE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = LayoutContent;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: i18n.language,
        className: "overflow-x-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0"
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 86,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 85,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "antialiased overflow-x-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(I18nextProvider, {
                    i18n: i18n,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$WebSocketContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WebSocketProvider"], {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ThemeProvider$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ThemeProvider"], {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: "Loading..."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/layout.tsx",
                                    lineNumber: 92,
                                    columnNumber: 33
                                }, void 0),
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LayoutContent, {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "min-h-screen",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                                            children: children
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/layout.tsx",
                                            lineNumber: 95,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/layout.tsx",
                                        lineNumber: 94,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/layout.tsx",
                                    lineNumber: 93,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/layout.tsx",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/layout.tsx",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/layout.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 89,
                    columnNumber: 7
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 88,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
}
_c1 = RootLayout;
var _c, _c1;
__turbopack_context__.k.register(_c, "LayoutContent");
__turbopack_context__.k.register(_c1, "RootLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props, debugStack, debugTask) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey, debugStack, debugTask);
    }
    function validateChildKeys(node) {
        "object" === typeof node && null !== node && node.$$typeof === REACT_ELEMENT_TYPE && node._store && (node._store.validated = 1);
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        "react-stack-bottom-frame": function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React["react-stack-bottom-frame"].bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren, source, self) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self, trackActualOwner ? Error("react-stack-top-frame") : unknownOwnerDebugStack, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/i18next/dist/esm/i18next.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "changeLanguage": (()=>changeLanguage),
    "createInstance": (()=>createInstance),
    "default": (()=>instance),
    "dir": (()=>dir),
    "exists": (()=>exists),
    "getFixedT": (()=>getFixedT),
    "hasLoadedNamespace": (()=>hasLoadedNamespace),
    "init": (()=>init),
    "loadLanguages": (()=>loadLanguages),
    "loadNamespaces": (()=>loadNamespaces),
    "loadResources": (()=>loadResources),
    "reloadResources": (()=>reloadResources),
    "setDefaultNamespace": (()=>setDefaultNamespace),
    "t": (()=>t),
    "use": (()=>use)
});
const isString = (obj)=>typeof obj === 'string';
const defer = ()=>{
    let res;
    let rej;
    const promise = new Promise((resolve, reject)=>{
        res = resolve;
        rej = reject;
    });
    promise.resolve = res;
    promise.reject = rej;
    return promise;
};
const makeString = (object)=>{
    if (object == null) return '';
    return '' + object;
};
const copy = (a, s, t)=>{
    a.forEach((m)=>{
        if (s[m]) t[m] = s[m];
    });
};
const lastOfPathSeparatorRegExp = /###/g;
const cleanKey = (key)=>key && key.indexOf('###') > -1 ? key.replace(lastOfPathSeparatorRegExp, '.') : key;
const canNotTraverseDeeper = (object)=>!object || isString(object);
const getLastOfPath = (object, path, Empty)=>{
    const stack = !isString(path) ? path : path.split('.');
    let stackIndex = 0;
    while(stackIndex < stack.length - 1){
        if (canNotTraverseDeeper(object)) return {};
        const key = cleanKey(stack[stackIndex]);
        if (!object[key] && Empty) object[key] = new Empty();
        if (Object.prototype.hasOwnProperty.call(object, key)) {
            object = object[key];
        } else {
            object = {};
        }
        ++stackIndex;
    }
    if (canNotTraverseDeeper(object)) return {};
    return {
        obj: object,
        k: cleanKey(stack[stackIndex])
    };
};
const setPath = (object, path, newValue)=>{
    const { obj, k } = getLastOfPath(object, path, Object);
    if (obj !== undefined || path.length === 1) {
        obj[k] = newValue;
        return;
    }
    let e = path[path.length - 1];
    let p = path.slice(0, path.length - 1);
    let last = getLastOfPath(object, p, Object);
    while(last.obj === undefined && p.length){
        e = `${p[p.length - 1]}.${e}`;
        p = p.slice(0, p.length - 1);
        last = getLastOfPath(object, p, Object);
        if (last?.obj && typeof last.obj[`${last.k}.${e}`] !== 'undefined') {
            last.obj = undefined;
        }
    }
    last.obj[`${last.k}.${e}`] = newValue;
};
const pushPath = (object, path, newValue, concat)=>{
    const { obj, k } = getLastOfPath(object, path, Object);
    obj[k] = obj[k] || [];
    obj[k].push(newValue);
};
const getPath = (object, path)=>{
    const { obj, k } = getLastOfPath(object, path);
    if (!obj) return undefined;
    if (!Object.prototype.hasOwnProperty.call(obj, k)) return undefined;
    return obj[k];
};
const getPathWithDefaults = (data, defaultData, key)=>{
    const value = getPath(data, key);
    if (value !== undefined) {
        return value;
    }
    return getPath(defaultData, key);
};
const deepExtend = (target, source, overwrite)=>{
    for(const prop in source){
        if (prop !== '__proto__' && prop !== 'constructor') {
            if (prop in target) {
                if (isString(target[prop]) || target[prop] instanceof String || isString(source[prop]) || source[prop] instanceof String) {
                    if (overwrite) target[prop] = source[prop];
                } else {
                    deepExtend(target[prop], source[prop], overwrite);
                }
            } else {
                target[prop] = source[prop];
            }
        }
    }
    return target;
};
const regexEscape = (str)=>str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
var _entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;'
};
const escape = (data)=>{
    if (isString(data)) {
        return data.replace(/[&<>"'\/]/g, (s)=>_entityMap[s]);
    }
    return data;
};
class RegExpCache {
    constructor(capacity){
        this.capacity = capacity;
        this.regExpMap = new Map();
        this.regExpQueue = [];
    }
    getRegExp(pattern) {
        const regExpFromCache = this.regExpMap.get(pattern);
        if (regExpFromCache !== undefined) {
            return regExpFromCache;
        }
        const regExpNew = new RegExp(pattern);
        if (this.regExpQueue.length === this.capacity) {
            this.regExpMap.delete(this.regExpQueue.shift());
        }
        this.regExpMap.set(pattern, regExpNew);
        this.regExpQueue.push(pattern);
        return regExpNew;
    }
}
const chars = [
    ' ',
    ',',
    '?',
    '!',
    ';'
];
const looksLikeObjectPathRegExpCache = new RegExpCache(20);
const looksLikeObjectPath = (key, nsSeparator, keySeparator)=>{
    nsSeparator = nsSeparator || '';
    keySeparator = keySeparator || '';
    const possibleChars = chars.filter((c)=>nsSeparator.indexOf(c) < 0 && keySeparator.indexOf(c) < 0);
    if (possibleChars.length === 0) return true;
    const r = looksLikeObjectPathRegExpCache.getRegExp(`(${possibleChars.map((c)=>c === '?' ? '\\?' : c).join('|')})`);
    let matched = !r.test(key);
    if (!matched) {
        const ki = key.indexOf(keySeparator);
        if (ki > 0 && !r.test(key.substring(0, ki))) {
            matched = true;
        }
    }
    return matched;
};
const deepFind = (obj, path, keySeparator = '.')=>{
    if (!obj) return undefined;
    if (obj[path]) {
        if (!Object.prototype.hasOwnProperty.call(obj, path)) return undefined;
        return obj[path];
    }
    const tokens = path.split(keySeparator);
    let current = obj;
    for(let i = 0; i < tokens.length;){
        if (!current || typeof current !== 'object') {
            return undefined;
        }
        let next;
        let nextPath = '';
        for(let j = i; j < tokens.length; ++j){
            if (j !== i) {
                nextPath += keySeparator;
            }
            nextPath += tokens[j];
            next = current[nextPath];
            if (next !== undefined) {
                if ([
                    'string',
                    'number',
                    'boolean'
                ].indexOf(typeof next) > -1 && j < tokens.length - 1) {
                    continue;
                }
                i += j - i + 1;
                break;
            }
        }
        current = next;
    }
    return current;
};
const getCleanedCode = (code)=>code?.replace('_', '-');
const consoleLogger = {
    type: 'logger',
    log (args) {
        this.output('log', args);
    },
    warn (args) {
        this.output('warn', args);
    },
    error (args) {
        this.output('error', args);
    },
    output (type, args) {
        console?.[type]?.apply?.(console, args);
    }
};
class Logger {
    constructor(concreteLogger, options1 = {}){
        this.init(concreteLogger, options1);
    }
    init(concreteLogger, options1 = {}) {
        this.prefix = options1.prefix || 'i18next:';
        this.logger = concreteLogger || consoleLogger;
        this.options = options1;
        this.debug = options1.debug;
    }
    log(...args) {
        return this.forward(args, 'log', '', true);
    }
    warn(...args) {
        return this.forward(args, 'warn', '', true);
    }
    error(...args) {
        return this.forward(args, 'error', '');
    }
    deprecate(...args) {
        return this.forward(args, 'warn', 'WARNING DEPRECATED: ', true);
    }
    forward(args, lvl, prefix, debugOnly) {
        if (debugOnly && !this.debug) return null;
        if (isString(args[0])) args[0] = `${prefix}${this.prefix} ${args[0]}`;
        return this.logger[lvl](args);
    }
    create(moduleName) {
        return new Logger(this.logger, {
            ...{
                prefix: `${this.prefix}:${moduleName}:`
            },
            ...this.options
        });
    }
    clone(options1) {
        options1 = options1 || this.options;
        options1.prefix = options1.prefix || this.prefix;
        return new Logger(this.logger, options1);
    }
}
var baseLogger = new Logger();
class EventEmitter {
    constructor(){
        this.observers = {};
    }
    on(events, listener) {
        events.split(' ').forEach((event)=>{
            if (!this.observers[event]) this.observers[event] = new Map();
            const numListeners = this.observers[event].get(listener) || 0;
            this.observers[event].set(listener, numListeners + 1);
        });
        return this;
    }
    off(event, listener) {
        if (!this.observers[event]) return;
        if (!listener) {
            delete this.observers[event];
            return;
        }
        this.observers[event].delete(listener);
    }
    emit(event, ...args) {
        if (this.observers[event]) {
            const cloned = Array.from(this.observers[event].entries());
            cloned.forEach(([observer, numTimesAdded])=>{
                for(let i = 0; i < numTimesAdded; i++){
                    observer(...args);
                }
            });
        }
        if (this.observers['*']) {
            const cloned = Array.from(this.observers['*'].entries());
            cloned.forEach(([observer, numTimesAdded])=>{
                for(let i = 0; i < numTimesAdded; i++){
                    observer.apply(observer, [
                        event,
                        ...args
                    ]);
                }
            });
        }
    }
}
class ResourceStore extends EventEmitter {
    constructor(data, options1 = {
        ns: [
            'translation'
        ],
        defaultNS: 'translation'
    }){
        super();
        this.data = data || {};
        this.options = options1;
        if (this.options.keySeparator === undefined) {
            this.options.keySeparator = '.';
        }
        if (this.options.ignoreJSONStructure === undefined) {
            this.options.ignoreJSONStructure = true;
        }
    }
    addNamespaces(ns) {
        if (this.options.ns.indexOf(ns) < 0) {
            this.options.ns.push(ns);
        }
    }
    removeNamespaces(ns) {
        const index = this.options.ns.indexOf(ns);
        if (index > -1) {
            this.options.ns.splice(index, 1);
        }
    }
    getResource(lng, ns, key, options1 = {}) {
        const keySeparator = options1.keySeparator !== undefined ? options1.keySeparator : this.options.keySeparator;
        const ignoreJSONStructure = options1.ignoreJSONStructure !== undefined ? options1.ignoreJSONStructure : this.options.ignoreJSONStructure;
        let path;
        if (lng.indexOf('.') > -1) {
            path = lng.split('.');
        } else {
            path = [
                lng,
                ns
            ];
            if (key) {
                if (Array.isArray(key)) {
                    path.push(...key);
                } else if (isString(key) && keySeparator) {
                    path.push(...key.split(keySeparator));
                } else {
                    path.push(key);
                }
            }
        }
        const result = getPath(this.data, path);
        if (!result && !ns && !key && lng.indexOf('.') > -1) {
            lng = path[0];
            ns = path[1];
            key = path.slice(2).join('.');
        }
        if (result || !ignoreJSONStructure || !isString(key)) return result;
        return deepFind(this.data?.[lng]?.[ns], key, keySeparator);
    }
    addResource(lng, ns, key, value, options1 = {
        silent: false
    }) {
        const keySeparator = options1.keySeparator !== undefined ? options1.keySeparator : this.options.keySeparator;
        let path = [
            lng,
            ns
        ];
        if (key) path = path.concat(keySeparator ? key.split(keySeparator) : key);
        if (lng.indexOf('.') > -1) {
            path = lng.split('.');
            value = ns;
            ns = path[1];
        }
        this.addNamespaces(ns);
        setPath(this.data, path, value);
        if (!options1.silent) this.emit('added', lng, ns, key, value);
    }
    addResources(lng, ns, resources, options1 = {
        silent: false
    }) {
        for(const m in resources){
            if (isString(resources[m]) || Array.isArray(resources[m])) this.addResource(lng, ns, m, resources[m], {
                silent: true
            });
        }
        if (!options1.silent) this.emit('added', lng, ns, resources);
    }
    addResourceBundle(lng, ns, resources, deep, overwrite, options1 = {
        silent: false,
        skipCopy: false
    }) {
        let path = [
            lng,
            ns
        ];
        if (lng.indexOf('.') > -1) {
            path = lng.split('.');
            deep = resources;
            resources = ns;
            ns = path[1];
        }
        this.addNamespaces(ns);
        let pack = getPath(this.data, path) || {};
        if (!options1.skipCopy) resources = JSON.parse(JSON.stringify(resources));
        if (deep) {
            deepExtend(pack, resources, overwrite);
        } else {
            pack = {
                ...pack,
                ...resources
            };
        }
        setPath(this.data, path, pack);
        if (!options1.silent) this.emit('added', lng, ns, resources);
    }
    removeResourceBundle(lng, ns) {
        if (this.hasResourceBundle(lng, ns)) {
            delete this.data[lng][ns];
        }
        this.removeNamespaces(ns);
        this.emit('removed', lng, ns);
    }
    hasResourceBundle(lng, ns) {
        return this.getResource(lng, ns) !== undefined;
    }
    getResourceBundle(lng, ns) {
        if (!ns) ns = this.options.defaultNS;
        return this.getResource(lng, ns);
    }
    getDataByLanguage(lng) {
        return this.data[lng];
    }
    hasLanguageSomeTranslations(lng) {
        const data = this.getDataByLanguage(lng);
        const n = data && Object.keys(data) || [];
        return !!n.find((v)=>data[v] && Object.keys(data[v]).length > 0);
    }
    toJSON() {
        return this.data;
    }
}
var postProcessor = {
    processors: {},
    addPostProcessor (module) {
        this.processors[module.name] = module;
    },
    handle (processors, value, key, options1, translator) {
        processors.forEach((processor)=>{
            value = this.processors[processor]?.process(value, key, options1, translator) ?? value;
        });
        return value;
    }
};
const checkedLoadedFor = {};
const shouldHandleAsObject = (res)=>!isString(res) && typeof res !== 'boolean' && typeof res !== 'number';
class Translator extends EventEmitter {
    constructor(services, options1 = {}){
        super();
        copy([
            'resourceStore',
            'languageUtils',
            'pluralResolver',
            'interpolator',
            'backendConnector',
            'i18nFormat',
            'utils'
        ], services, this);
        this.options = options1;
        if (this.options.keySeparator === undefined) {
            this.options.keySeparator = '.';
        }
        this.logger = baseLogger.create('translator');
    }
    changeLanguage(lng) {
        if (lng) this.language = lng;
    }
    exists(key, o = {
        interpolation: {}
    }) {
        const opt = {
            ...o
        };
        if (key == null) return false;
        const resolved = this.resolve(key, opt);
        return resolved?.res !== undefined;
    }
    extractFromKey(key, opt) {
        let nsSeparator = opt.nsSeparator !== undefined ? opt.nsSeparator : this.options.nsSeparator;
        if (nsSeparator === undefined) nsSeparator = ':';
        const keySeparator = opt.keySeparator !== undefined ? opt.keySeparator : this.options.keySeparator;
        let namespaces = opt.ns || this.options.defaultNS || [];
        const wouldCheckForNsInKey = nsSeparator && key.indexOf(nsSeparator) > -1;
        const seemsNaturalLanguage = !this.options.userDefinedKeySeparator && !opt.keySeparator && !this.options.userDefinedNsSeparator && !opt.nsSeparator && !looksLikeObjectPath(key, nsSeparator, keySeparator);
        if (wouldCheckForNsInKey && !seemsNaturalLanguage) {
            const m = key.match(this.interpolator.nestingRegexp);
            if (m && m.length > 0) {
                return {
                    key,
                    namespaces: isString(namespaces) ? [
                        namespaces
                    ] : namespaces
                };
            }
            const parts = key.split(nsSeparator);
            if (nsSeparator !== keySeparator || nsSeparator === keySeparator && this.options.ns.indexOf(parts[0]) > -1) namespaces = parts.shift();
            key = parts.join(keySeparator);
        }
        return {
            key,
            namespaces: isString(namespaces) ? [
                namespaces
            ] : namespaces
        };
    }
    translate(keys, o, lastKey) {
        let opt = typeof o === 'object' ? {
            ...o
        } : o;
        if (typeof opt !== 'object' && this.options.overloadTranslationOptionHandler) {
            opt = this.options.overloadTranslationOptionHandler(arguments);
        }
        if (typeof options === 'object') opt = {
            ...opt
        };
        if (!opt) opt = {};
        if (keys == null) return '';
        if (!Array.isArray(keys)) keys = [
            String(keys)
        ];
        const returnDetails = opt.returnDetails !== undefined ? opt.returnDetails : this.options.returnDetails;
        const keySeparator = opt.keySeparator !== undefined ? opt.keySeparator : this.options.keySeparator;
        const { key, namespaces } = this.extractFromKey(keys[keys.length - 1], opt);
        const namespace = namespaces[namespaces.length - 1];
        let nsSeparator = opt.nsSeparator !== undefined ? opt.nsSeparator : this.options.nsSeparator;
        if (nsSeparator === undefined) nsSeparator = ':';
        const lng = opt.lng || this.language;
        const appendNamespaceToCIMode = opt.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
        if (lng?.toLowerCase() === 'cimode') {
            if (appendNamespaceToCIMode) {
                if (returnDetails) {
                    return {
                        res: `${namespace}${nsSeparator}${key}`,
                        usedKey: key,
                        exactUsedKey: key,
                        usedLng: lng,
                        usedNS: namespace,
                        usedParams: this.getUsedParamsDetails(opt)
                    };
                }
                return `${namespace}${nsSeparator}${key}`;
            }
            if (returnDetails) {
                return {
                    res: key,
                    usedKey: key,
                    exactUsedKey: key,
                    usedLng: lng,
                    usedNS: namespace,
                    usedParams: this.getUsedParamsDetails(opt)
                };
            }
            return key;
        }
        const resolved = this.resolve(keys, opt);
        let res = resolved?.res;
        const resUsedKey = resolved?.usedKey || key;
        const resExactUsedKey = resolved?.exactUsedKey || key;
        const noObject = [
            '[object Number]',
            '[object Function]',
            '[object RegExp]'
        ];
        const joinArrays = opt.joinArrays !== undefined ? opt.joinArrays : this.options.joinArrays;
        const handleAsObjectInI18nFormat = !this.i18nFormat || this.i18nFormat.handleAsObject;
        const needsPluralHandling = opt.count !== undefined && !isString(opt.count);
        const hasDefaultValue = Translator.hasDefaultValue(opt);
        const defaultValueSuffix = needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, opt) : '';
        const defaultValueSuffixOrdinalFallback = opt.ordinal && needsPluralHandling ? this.pluralResolver.getSuffix(lng, opt.count, {
            ordinal: false
        }) : '';
        const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
        const defaultValue = needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] || opt[`defaultValue${defaultValueSuffix}`] || opt[`defaultValue${defaultValueSuffixOrdinalFallback}`] || opt.defaultValue;
        let resForObjHndl = res;
        if (handleAsObjectInI18nFormat && !res && hasDefaultValue) {
            resForObjHndl = defaultValue;
        }
        const handleAsObject = shouldHandleAsObject(resForObjHndl);
        const resType = Object.prototype.toString.apply(resForObjHndl);
        if (handleAsObjectInI18nFormat && resForObjHndl && handleAsObject && noObject.indexOf(resType) < 0 && !(isString(joinArrays) && Array.isArray(resForObjHndl))) {
            if (!opt.returnObjects && !this.options.returnObjects) {
                if (!this.options.returnedObjectHandler) {
                    this.logger.warn('accessing an object - but returnObjects options is not enabled!');
                }
                const r = this.options.returnedObjectHandler ? this.options.returnedObjectHandler(resUsedKey, resForObjHndl, {
                    ...opt,
                    ns: namespaces
                }) : `key '${key} (${this.language})' returned an object instead of string.`;
                if (returnDetails) {
                    resolved.res = r;
                    resolved.usedParams = this.getUsedParamsDetails(opt);
                    return resolved;
                }
                return r;
            }
            if (keySeparator) {
                const resTypeIsArray = Array.isArray(resForObjHndl);
                const copy = resTypeIsArray ? [] : {};
                const newKeyToUse = resTypeIsArray ? resExactUsedKey : resUsedKey;
                for(const m in resForObjHndl){
                    if (Object.prototype.hasOwnProperty.call(resForObjHndl, m)) {
                        const deepKey = `${newKeyToUse}${keySeparator}${m}`;
                        if (hasDefaultValue && !res) {
                            copy[m] = this.translate(deepKey, {
                                ...opt,
                                defaultValue: shouldHandleAsObject(defaultValue) ? defaultValue[m] : undefined,
                                ...{
                                    joinArrays: false,
                                    ns: namespaces
                                }
                            });
                        } else {
                            copy[m] = this.translate(deepKey, {
                                ...opt,
                                ...{
                                    joinArrays: false,
                                    ns: namespaces
                                }
                            });
                        }
                        if (copy[m] === deepKey) copy[m] = resForObjHndl[m];
                    }
                }
                res = copy;
            }
        } else if (handleAsObjectInI18nFormat && isString(joinArrays) && Array.isArray(res)) {
            res = res.join(joinArrays);
            if (res) res = this.extendTranslation(res, keys, opt, lastKey);
        } else {
            let usedDefault = false;
            let usedKey = false;
            if (!this.isValidLookup(res) && hasDefaultValue) {
                usedDefault = true;
                res = defaultValue;
            }
            if (!this.isValidLookup(res)) {
                usedKey = true;
                res = key;
            }
            const missingKeyNoValueFallbackToKey = opt.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey;
            const resForMissing = missingKeyNoValueFallbackToKey && usedKey ? undefined : res;
            const updateMissing = hasDefaultValue && defaultValue !== res && this.options.updateMissing;
            if (usedKey || usedDefault || updateMissing) {
                this.logger.log(updateMissing ? 'updateKey' : 'missingKey', lng, namespace, key, updateMissing ? defaultValue : res);
                if (keySeparator) {
                    const fk = this.resolve(key, {
                        ...opt,
                        keySeparator: false
                    });
                    if (fk && fk.res) this.logger.warn('Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.');
                }
                let lngs = [];
                const fallbackLngs = this.languageUtils.getFallbackCodes(this.options.fallbackLng, opt.lng || this.language);
                if (this.options.saveMissingTo === 'fallback' && fallbackLngs && fallbackLngs[0]) {
                    for(let i = 0; i < fallbackLngs.length; i++){
                        lngs.push(fallbackLngs[i]);
                    }
                } else if (this.options.saveMissingTo === 'all') {
                    lngs = this.languageUtils.toResolveHierarchy(opt.lng || this.language);
                } else {
                    lngs.push(opt.lng || this.language);
                }
                const send = (l, k, specificDefaultValue)=>{
                    const defaultForMissing = hasDefaultValue && specificDefaultValue !== res ? specificDefaultValue : resForMissing;
                    if (this.options.missingKeyHandler) {
                        this.options.missingKeyHandler(l, namespace, k, defaultForMissing, updateMissing, opt);
                    } else if (this.backendConnector?.saveMissing) {
                        this.backendConnector.saveMissing(l, namespace, k, defaultForMissing, updateMissing, opt);
                    }
                    this.emit('missingKey', l, namespace, k, res);
                };
                if (this.options.saveMissing) {
                    if (this.options.saveMissingPlurals && needsPluralHandling) {
                        lngs.forEach((language)=>{
                            const suffixes = this.pluralResolver.getSuffixes(language, opt);
                            if (needsZeroSuffixLookup && opt[`defaultValue${this.options.pluralSeparator}zero`] && suffixes.indexOf(`${this.options.pluralSeparator}zero`) < 0) {
                                suffixes.push(`${this.options.pluralSeparator}zero`);
                            }
                            suffixes.forEach((suffix)=>{
                                send([
                                    language
                                ], key + suffix, opt[`defaultValue${suffix}`] || defaultValue);
                            });
                        });
                    } else {
                        send(lngs, key, defaultValue);
                    }
                }
            }
            res = this.extendTranslation(res, keys, opt, resolved, lastKey);
            if (usedKey && res === key && this.options.appendNamespaceToMissingKey) {
                res = `${namespace}${nsSeparator}${key}`;
            }
            if ((usedKey || usedDefault) && this.options.parseMissingKeyHandler) {
                res = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${namespace}${nsSeparator}${key}` : key, usedDefault ? res : undefined, opt);
            }
        }
        if (returnDetails) {
            resolved.res = res;
            resolved.usedParams = this.getUsedParamsDetails(opt);
            return resolved;
        }
        return res;
    }
    extendTranslation(res, key, opt, resolved, lastKey) {
        if (this.i18nFormat?.parse) {
            res = this.i18nFormat.parse(res, {
                ...this.options.interpolation.defaultVariables,
                ...opt
            }, opt.lng || this.language || resolved.usedLng, resolved.usedNS, resolved.usedKey, {
                resolved
            });
        } else if (!opt.skipInterpolation) {
            if (opt.interpolation) this.interpolator.init({
                ...opt,
                ...{
                    interpolation: {
                        ...this.options.interpolation,
                        ...opt.interpolation
                    }
                }
            });
            const skipOnVariables = isString(res) && (opt?.interpolation?.skipOnVariables !== undefined ? opt.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables);
            let nestBef;
            if (skipOnVariables) {
                const nb = res.match(this.interpolator.nestingRegexp);
                nestBef = nb && nb.length;
            }
            let data = opt.replace && !isString(opt.replace) ? opt.replace : opt;
            if (this.options.interpolation.defaultVariables) data = {
                ...this.options.interpolation.defaultVariables,
                ...data
            };
            res = this.interpolator.interpolate(res, data, opt.lng || this.language || resolved.usedLng, opt);
            if (skipOnVariables) {
                const na = res.match(this.interpolator.nestingRegexp);
                const nestAft = na && na.length;
                if (nestBef < nestAft) opt.nest = false;
            }
            if (!opt.lng && resolved && resolved.res) opt.lng = this.language || resolved.usedLng;
            if (opt.nest !== false) res = this.interpolator.nest(res, (...args)=>{
                if (lastKey?.[0] === args[0] && !opt.context) {
                    this.logger.warn(`It seems you are nesting recursively key: ${args[0]} in key: ${key[0]}`);
                    return null;
                }
                return this.translate(...args, key);
            }, opt);
            if (opt.interpolation) this.interpolator.reset();
        }
        const postProcess = opt.postProcess || this.options.postProcess;
        const postProcessorNames = isString(postProcess) ? [
            postProcess
        ] : postProcess;
        if (res != null && postProcessorNames?.length && opt.applyPostProcessor !== false) {
            res = postProcessor.handle(postProcessorNames, res, key, this.options && this.options.postProcessPassResolved ? {
                i18nResolved: {
                    ...resolved,
                    usedParams: this.getUsedParamsDetails(opt)
                },
                ...opt
            } : opt, this);
        }
        return res;
    }
    resolve(keys, opt = {}) {
        let found;
        let usedKey;
        let exactUsedKey;
        let usedLng;
        let usedNS;
        if (isString(keys)) keys = [
            keys
        ];
        keys.forEach((k)=>{
            if (this.isValidLookup(found)) return;
            const extracted = this.extractFromKey(k, opt);
            const key = extracted.key;
            usedKey = key;
            let namespaces = extracted.namespaces;
            if (this.options.fallbackNS) namespaces = namespaces.concat(this.options.fallbackNS);
            const needsPluralHandling = opt.count !== undefined && !isString(opt.count);
            const needsZeroSuffixLookup = needsPluralHandling && !opt.ordinal && opt.count === 0;
            const needsContextHandling = opt.context !== undefined && (isString(opt.context) || typeof opt.context === 'number') && opt.context !== '';
            const codes = opt.lngs ? opt.lngs : this.languageUtils.toResolveHierarchy(opt.lng || this.language, opt.fallbackLng);
            namespaces.forEach((ns)=>{
                if (this.isValidLookup(found)) return;
                usedNS = ns;
                if (!checkedLoadedFor[`${codes[0]}-${ns}`] && this.utils?.hasLoadedNamespace && !this.utils?.hasLoadedNamespace(usedNS)) {
                    checkedLoadedFor[`${codes[0]}-${ns}`] = true;
                    this.logger.warn(`key "${usedKey}" for languages "${codes.join(', ')}" won't get resolved as namespace "${usedNS}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
                }
                codes.forEach((code)=>{
                    if (this.isValidLookup(found)) return;
                    usedLng = code;
                    const finalKeys = [
                        key
                    ];
                    if (this.i18nFormat?.addLookupKeys) {
                        this.i18nFormat.addLookupKeys(finalKeys, key, code, ns, opt);
                    } else {
                        let pluralSuffix;
                        if (needsPluralHandling) pluralSuffix = this.pluralResolver.getSuffix(code, opt.count, opt);
                        const zeroSuffix = `${this.options.pluralSeparator}zero`;
                        const ordinalPrefix = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                        if (needsPluralHandling) {
                            finalKeys.push(key + pluralSuffix);
                            if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                                finalKeys.push(key + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                            }
                            if (needsZeroSuffixLookup) {
                                finalKeys.push(key + zeroSuffix);
                            }
                        }
                        if (needsContextHandling) {
                            const contextKey = `${key}${this.options.contextSeparator}${opt.context}`;
                            finalKeys.push(contextKey);
                            if (needsPluralHandling) {
                                finalKeys.push(contextKey + pluralSuffix);
                                if (opt.ordinal && pluralSuffix.indexOf(ordinalPrefix) === 0) {
                                    finalKeys.push(contextKey + pluralSuffix.replace(ordinalPrefix, this.options.pluralSeparator));
                                }
                                if (needsZeroSuffixLookup) {
                                    finalKeys.push(contextKey + zeroSuffix);
                                }
                            }
                        }
                    }
                    let possibleKey;
                    while(possibleKey = finalKeys.pop()){
                        if (!this.isValidLookup(found)) {
                            exactUsedKey = possibleKey;
                            found = this.getResource(code, ns, possibleKey, opt);
                        }
                    }
                });
            });
        });
        return {
            res: found,
            usedKey,
            exactUsedKey,
            usedLng,
            usedNS
        };
    }
    isValidLookup(res) {
        return res !== undefined && !(!this.options.returnNull && res === null) && !(!this.options.returnEmptyString && res === '');
    }
    getResource(code, ns, key, options1 = {}) {
        if (this.i18nFormat?.getResource) return this.i18nFormat.getResource(code, ns, key, options1);
        return this.resourceStore.getResource(code, ns, key, options1);
    }
    getUsedParamsDetails(options1 = {}) {
        const optionsKeys = [
            'defaultValue',
            'ordinal',
            'context',
            'replace',
            'lng',
            'lngs',
            'fallbackLng',
            'ns',
            'keySeparator',
            'nsSeparator',
            'returnObjects',
            'returnDetails',
            'joinArrays',
            'postProcess',
            'interpolation'
        ];
        const useOptionsReplaceForData = options1.replace && !isString(options1.replace);
        let data = useOptionsReplaceForData ? options1.replace : options1;
        if (useOptionsReplaceForData && typeof options1.count !== 'undefined') {
            data.count = options1.count;
        }
        if (this.options.interpolation.defaultVariables) {
            data = {
                ...this.options.interpolation.defaultVariables,
                ...data
            };
        }
        if (!useOptionsReplaceForData) {
            data = {
                ...data
            };
            for (const key of optionsKeys){
                delete data[key];
            }
        }
        return data;
    }
    static hasDefaultValue(options1) {
        const prefix = 'defaultValue';
        for(const option in options1){
            if (Object.prototype.hasOwnProperty.call(options1, option) && prefix === option.substring(0, prefix.length) && undefined !== options1[option]) {
                return true;
            }
        }
        return false;
    }
}
class LanguageUtil {
    constructor(options1){
        this.options = options1;
        this.supportedLngs = this.options.supportedLngs || false;
        this.logger = baseLogger.create('languageUtils');
    }
    getScriptPartFromCode(code) {
        code = getCleanedCode(code);
        if (!code || code.indexOf('-') < 0) return null;
        const p = code.split('-');
        if (p.length === 2) return null;
        p.pop();
        if (p[p.length - 1].toLowerCase() === 'x') return null;
        return this.formatLanguageCode(p.join('-'));
    }
    getLanguagePartFromCode(code) {
        code = getCleanedCode(code);
        if (!code || code.indexOf('-') < 0) return code;
        const p = code.split('-');
        return this.formatLanguageCode(p[0]);
    }
    formatLanguageCode(code) {
        if (isString(code) && code.indexOf('-') > -1) {
            let formattedCode;
            try {
                formattedCode = Intl.getCanonicalLocales(code)[0];
            } catch (e) {}
            if (formattedCode && this.options.lowerCaseLng) {
                formattedCode = formattedCode.toLowerCase();
            }
            if (formattedCode) return formattedCode;
            if (this.options.lowerCaseLng) {
                return code.toLowerCase();
            }
            return code;
        }
        return this.options.cleanCode || this.options.lowerCaseLng ? code.toLowerCase() : code;
    }
    isSupportedCode(code) {
        if (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) {
            code = this.getLanguagePartFromCode(code);
        }
        return !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(code) > -1;
    }
    getBestMatchFromCodes(codes) {
        if (!codes) return null;
        let found;
        codes.forEach((code)=>{
            if (found) return;
            const cleanedLng = this.formatLanguageCode(code);
            if (!this.options.supportedLngs || this.isSupportedCode(cleanedLng)) found = cleanedLng;
        });
        if (!found && this.options.supportedLngs) {
            codes.forEach((code)=>{
                if (found) return;
                const lngScOnly = this.getScriptPartFromCode(code);
                if (this.isSupportedCode(lngScOnly)) return found = lngScOnly;
                const lngOnly = this.getLanguagePartFromCode(code);
                if (this.isSupportedCode(lngOnly)) return found = lngOnly;
                found = this.options.supportedLngs.find((supportedLng)=>{
                    if (supportedLng === lngOnly) return supportedLng;
                    if (supportedLng.indexOf('-') < 0 && lngOnly.indexOf('-') < 0) return;
                    if (supportedLng.indexOf('-') > 0 && lngOnly.indexOf('-') < 0 && supportedLng.substring(0, supportedLng.indexOf('-')) === lngOnly) return supportedLng;
                    if (supportedLng.indexOf(lngOnly) === 0 && lngOnly.length > 1) return supportedLng;
                });
            });
        }
        if (!found) found = this.getFallbackCodes(this.options.fallbackLng)[0];
        return found;
    }
    getFallbackCodes(fallbacks, code) {
        if (!fallbacks) return [];
        if (typeof fallbacks === 'function') fallbacks = fallbacks(code);
        if (isString(fallbacks)) fallbacks = [
            fallbacks
        ];
        if (Array.isArray(fallbacks)) return fallbacks;
        if (!code) return fallbacks.default || [];
        let found = fallbacks[code];
        if (!found) found = fallbacks[this.getScriptPartFromCode(code)];
        if (!found) found = fallbacks[this.formatLanguageCode(code)];
        if (!found) found = fallbacks[this.getLanguagePartFromCode(code)];
        if (!found) found = fallbacks.default;
        return found || [];
    }
    toResolveHierarchy(code, fallbackCode) {
        const fallbackCodes = this.getFallbackCodes((fallbackCode === false ? [] : fallbackCode) || this.options.fallbackLng || [], code);
        const codes = [];
        const addCode = (c)=>{
            if (!c) return;
            if (this.isSupportedCode(c)) {
                codes.push(c);
            } else {
                this.logger.warn(`rejecting language code not found in supportedLngs: ${c}`);
            }
        };
        if (isString(code) && (code.indexOf('-') > -1 || code.indexOf('_') > -1)) {
            if (this.options.load !== 'languageOnly') addCode(this.formatLanguageCode(code));
            if (this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly') addCode(this.getScriptPartFromCode(code));
            if (this.options.load !== 'currentOnly') addCode(this.getLanguagePartFromCode(code));
        } else if (isString(code)) {
            addCode(this.formatLanguageCode(code));
        }
        fallbackCodes.forEach((fc)=>{
            if (codes.indexOf(fc) < 0) addCode(this.formatLanguageCode(fc));
        });
        return codes;
    }
}
const suffixesOrder = {
    zero: 0,
    one: 1,
    two: 2,
    few: 3,
    many: 4,
    other: 5
};
const dummyRule = {
    select: (count)=>count === 1 ? 'one' : 'other',
    resolvedOptions: ()=>({
            pluralCategories: [
                'one',
                'other'
            ]
        })
};
class PluralResolver {
    constructor(languageUtils, options1 = {}){
        this.languageUtils = languageUtils;
        this.options = options1;
        this.logger = baseLogger.create('pluralResolver');
        this.pluralRulesCache = {};
    }
    addRule(lng, obj) {
        this.rules[lng] = obj;
    }
    clearCache() {
        this.pluralRulesCache = {};
    }
    getRule(code, options1 = {}) {
        const cleanedCode = getCleanedCode(code === 'dev' ? 'en' : code);
        const type = options1.ordinal ? 'ordinal' : 'cardinal';
        const cacheKey = JSON.stringify({
            cleanedCode,
            type
        });
        if (cacheKey in this.pluralRulesCache) {
            return this.pluralRulesCache[cacheKey];
        }
        let rule;
        try {
            rule = new Intl.PluralRules(cleanedCode, {
                type
            });
        } catch (err) {
            if (!Intl) {
                this.logger.error('No Intl support, please use an Intl polyfill!');
                return dummyRule;
            }
            if (!code.match(/-|_/)) return dummyRule;
            const lngPart = this.languageUtils.getLanguagePartFromCode(code);
            rule = this.getRule(lngPart, options1);
        }
        this.pluralRulesCache[cacheKey] = rule;
        return rule;
    }
    needsPlural(code, options1 = {}) {
        let rule = this.getRule(code, options1);
        if (!rule) rule = this.getRule('dev', options1);
        return rule?.resolvedOptions().pluralCategories.length > 1;
    }
    getPluralFormsOfKey(code, key, options1 = {}) {
        return this.getSuffixes(code, options1).map((suffix)=>`${key}${suffix}`);
    }
    getSuffixes(code, options1 = {}) {
        let rule = this.getRule(code, options1);
        if (!rule) rule = this.getRule('dev', options1);
        if (!rule) return [];
        return rule.resolvedOptions().pluralCategories.sort((pluralCategory1, pluralCategory2)=>suffixesOrder[pluralCategory1] - suffixesOrder[pluralCategory2]).map((pluralCategory)=>`${this.options.prepend}${options1.ordinal ? `ordinal${this.options.prepend}` : ''}${pluralCategory}`);
    }
    getSuffix(code, count, options1 = {}) {
        const rule = this.getRule(code, options1);
        if (rule) {
            return `${this.options.prepend}${options1.ordinal ? `ordinal${this.options.prepend}` : ''}${rule.select(count)}`;
        }
        this.logger.warn(`no plural rule found for: ${code}`);
        return this.getSuffix('dev', count, options1);
    }
}
const deepFindWithDefaults = (data, defaultData, key, keySeparator = '.', ignoreJSONStructure = true)=>{
    let path = getPathWithDefaults(data, defaultData, key);
    if (!path && ignoreJSONStructure && isString(key)) {
        path = deepFind(data, key, keySeparator);
        if (path === undefined) path = deepFind(defaultData, key, keySeparator);
    }
    return path;
};
const regexSafe = (val)=>val.replace(/\$/g, '$$$$');
class Interpolator {
    constructor(options1 = {}){
        this.logger = baseLogger.create('interpolator');
        this.options = options1;
        this.format = options1?.interpolation?.format || ((value)=>value);
        this.init(options1);
    }
    init(options1 = {}) {
        if (!options1.interpolation) options1.interpolation = {
            escapeValue: true
        };
        const { escape: escape$1, escapeValue, useRawValueToEscape, prefix, prefixEscaped, suffix, suffixEscaped, formatSeparator, unescapeSuffix, unescapePrefix, nestingPrefix, nestingPrefixEscaped, nestingSuffix, nestingSuffixEscaped, nestingOptionsSeparator, maxReplaces, alwaysFormat } = options1.interpolation;
        this.escape = escape$1 !== undefined ? escape$1 : escape;
        this.escapeValue = escapeValue !== undefined ? escapeValue : true;
        this.useRawValueToEscape = useRawValueToEscape !== undefined ? useRawValueToEscape : false;
        this.prefix = prefix ? regexEscape(prefix) : prefixEscaped || '{{';
        this.suffix = suffix ? regexEscape(suffix) : suffixEscaped || '}}';
        this.formatSeparator = formatSeparator || ',';
        this.unescapePrefix = unescapeSuffix ? '' : unescapePrefix || '-';
        this.unescapeSuffix = this.unescapePrefix ? '' : unescapeSuffix || '';
        this.nestingPrefix = nestingPrefix ? regexEscape(nestingPrefix) : nestingPrefixEscaped || regexEscape('$t(');
        this.nestingSuffix = nestingSuffix ? regexEscape(nestingSuffix) : nestingSuffixEscaped || regexEscape(')');
        this.nestingOptionsSeparator = nestingOptionsSeparator || ',';
        this.maxReplaces = maxReplaces || 1000;
        this.alwaysFormat = alwaysFormat !== undefined ? alwaysFormat : false;
        this.resetRegExp();
    }
    reset() {
        if (this.options) this.init(this.options);
    }
    resetRegExp() {
        const getOrResetRegExp = (existingRegExp, pattern)=>{
            if (existingRegExp?.source === pattern) {
                existingRegExp.lastIndex = 0;
                return existingRegExp;
            }
            return new RegExp(pattern, 'g');
        };
        this.regexp = getOrResetRegExp(this.regexp, `${this.prefix}(.+?)${this.suffix}`);
        this.regexpUnescape = getOrResetRegExp(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`);
        this.nestingRegexp = getOrResetRegExp(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`);
    }
    interpolate(str, data, lng, options1) {
        let match;
        let value;
        let replaces;
        const defaultData = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};
        const handleFormat = (key)=>{
            if (key.indexOf(this.formatSeparator) < 0) {
                const path = deepFindWithDefaults(data, defaultData, key, this.options.keySeparator, this.options.ignoreJSONStructure);
                return this.alwaysFormat ? this.format(path, undefined, lng, {
                    ...options1,
                    ...data,
                    interpolationkey: key
                }) : path;
            }
            const p = key.split(this.formatSeparator);
            const k = p.shift().trim();
            const f = p.join(this.formatSeparator).trim();
            return this.format(deepFindWithDefaults(data, defaultData, k, this.options.keySeparator, this.options.ignoreJSONStructure), f, lng, {
                ...options1,
                ...data,
                interpolationkey: k
            });
        };
        this.resetRegExp();
        const missingInterpolationHandler = options1?.missingInterpolationHandler || this.options.missingInterpolationHandler;
        const skipOnVariables = options1?.interpolation?.skipOnVariables !== undefined ? options1.interpolation.skipOnVariables : this.options.interpolation.skipOnVariables;
        const todos = [
            {
                regex: this.regexpUnescape,
                safeValue: (val)=>regexSafe(val)
            },
            {
                regex: this.regexp,
                safeValue: (val)=>this.escapeValue ? regexSafe(this.escape(val)) : regexSafe(val)
            }
        ];
        todos.forEach((todo)=>{
            replaces = 0;
            while(match = todo.regex.exec(str)){
                const matchedVar = match[1].trim();
                value = handleFormat(matchedVar);
                if (value === undefined) {
                    if (typeof missingInterpolationHandler === 'function') {
                        const temp = missingInterpolationHandler(str, match, options1);
                        value = isString(temp) ? temp : '';
                    } else if (options1 && Object.prototype.hasOwnProperty.call(options1, matchedVar)) {
                        value = '';
                    } else if (skipOnVariables) {
                        value = match[0];
                        continue;
                    } else {
                        this.logger.warn(`missed to pass in variable ${matchedVar} for interpolating ${str}`);
                        value = '';
                    }
                } else if (!isString(value) && !this.useRawValueToEscape) {
                    value = makeString(value);
                }
                const safeValue = todo.safeValue(value);
                str = str.replace(match[0], safeValue);
                if (skipOnVariables) {
                    todo.regex.lastIndex += value.length;
                    todo.regex.lastIndex -= match[0].length;
                } else {
                    todo.regex.lastIndex = 0;
                }
                replaces++;
                if (replaces >= this.maxReplaces) {
                    break;
                }
            }
        });
        return str;
    }
    nest(str, fc, options1 = {}) {
        let match;
        let value;
        let clonedOptions;
        const handleHasOptions = (key, inheritedOptions)=>{
            const sep = this.nestingOptionsSeparator;
            if (key.indexOf(sep) < 0) return key;
            const c = key.split(new RegExp(`${sep}[ ]*{`));
            let optionsString = `{${c[1]}`;
            key = c[0];
            optionsString = this.interpolate(optionsString, clonedOptions);
            const matchedSingleQuotes = optionsString.match(/'/g);
            const matchedDoubleQuotes = optionsString.match(/"/g);
            if ((matchedSingleQuotes?.length ?? 0) % 2 === 0 && !matchedDoubleQuotes || matchedDoubleQuotes.length % 2 !== 0) {
                optionsString = optionsString.replace(/'/g, '"');
            }
            try {
                clonedOptions = JSON.parse(optionsString);
                if (inheritedOptions) clonedOptions = {
                    ...inheritedOptions,
                    ...clonedOptions
                };
            } catch (e) {
                this.logger.warn(`failed parsing options string in nesting for key ${key}`, e);
                return `${key}${sep}${optionsString}`;
            }
            if (clonedOptions.defaultValue && clonedOptions.defaultValue.indexOf(this.prefix) > -1) delete clonedOptions.defaultValue;
            return key;
        };
        while(match = this.nestingRegexp.exec(str)){
            let formatters = [];
            clonedOptions = {
                ...options1
            };
            clonedOptions = clonedOptions.replace && !isString(clonedOptions.replace) ? clonedOptions.replace : clonedOptions;
            clonedOptions.applyPostProcessor = false;
            delete clonedOptions.defaultValue;
            let doReduce = false;
            if (match[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(match[1])) {
                const r = match[1].split(this.formatSeparator).map((elem)=>elem.trim());
                match[1] = r.shift();
                formatters = r;
                doReduce = true;
            }
            value = fc(handleHasOptions.call(this, match[1].trim(), clonedOptions), clonedOptions);
            if (value && match[0] === str && !isString(value)) return value;
            if (!isString(value)) value = makeString(value);
            if (!value) {
                this.logger.warn(`missed to resolve ${match[1]} for nesting ${str}`);
                value = '';
            }
            if (doReduce) {
                value = formatters.reduce((v, f)=>this.format(v, f, options1.lng, {
                        ...options1,
                        interpolationkey: match[1].trim()
                    }), value.trim());
            }
            str = str.replace(match[0], value);
            this.regexp.lastIndex = 0;
        }
        return str;
    }
}
const parseFormatStr = (formatStr)=>{
    let formatName = formatStr.toLowerCase().trim();
    const formatOptions = {};
    if (formatStr.indexOf('(') > -1) {
        const p = formatStr.split('(');
        formatName = p[0].toLowerCase().trim();
        const optStr = p[1].substring(0, p[1].length - 1);
        if (formatName === 'currency' && optStr.indexOf(':') < 0) {
            if (!formatOptions.currency) formatOptions.currency = optStr.trim();
        } else if (formatName === 'relativetime' && optStr.indexOf(':') < 0) {
            if (!formatOptions.range) formatOptions.range = optStr.trim();
        } else {
            const opts = optStr.split(';');
            opts.forEach((opt)=>{
                if (opt) {
                    const [key, ...rest] = opt.split(':');
                    const val = rest.join(':').trim().replace(/^'+|'+$/g, '');
                    const trimmedKey = key.trim();
                    if (!formatOptions[trimmedKey]) formatOptions[trimmedKey] = val;
                    if (val === 'false') formatOptions[trimmedKey] = false;
                    if (val === 'true') formatOptions[trimmedKey] = true;
                    if (!isNaN(val)) formatOptions[trimmedKey] = parseInt(val, 10);
                }
            });
        }
    }
    return {
        formatName,
        formatOptions
    };
};
const createCachedFormatter = (fn)=>{
    const cache = {};
    return (v, l, o)=>{
        let optForCache = o;
        if (o && o.interpolationkey && o.formatParams && o.formatParams[o.interpolationkey] && o[o.interpolationkey]) {
            optForCache = {
                ...optForCache,
                [o.interpolationkey]: undefined
            };
        }
        const key = l + JSON.stringify(optForCache);
        let frm = cache[key];
        if (!frm) {
            frm = fn(getCleanedCode(l), o);
            cache[key] = frm;
        }
        return frm(v);
    };
};
const createNonCachedFormatter = (fn)=>(v, l, o)=>fn(getCleanedCode(l), o)(v);
class Formatter {
    constructor(options1 = {}){
        this.logger = baseLogger.create('formatter');
        this.options = options1;
        this.init(options1);
    }
    init(services, options1 = {
        interpolation: {}
    }) {
        this.formatSeparator = options1.interpolation.formatSeparator || ',';
        const cf = options1.cacheInBuiltFormats ? createCachedFormatter : createNonCachedFormatter;
        this.formats = {
            number: cf((lng, opt)=>{
                const formatter = new Intl.NumberFormat(lng, {
                    ...opt
                });
                return (val)=>formatter.format(val);
            }),
            currency: cf((lng, opt)=>{
                const formatter = new Intl.NumberFormat(lng, {
                    ...opt,
                    style: 'currency'
                });
                return (val)=>formatter.format(val);
            }),
            datetime: cf((lng, opt)=>{
                const formatter = new Intl.DateTimeFormat(lng, {
                    ...opt
                });
                return (val)=>formatter.format(val);
            }),
            relativetime: cf((lng, opt)=>{
                const formatter = new Intl.RelativeTimeFormat(lng, {
                    ...opt
                });
                return (val)=>formatter.format(val, opt.range || 'day');
            }),
            list: cf((lng, opt)=>{
                const formatter = new Intl.ListFormat(lng, {
                    ...opt
                });
                return (val)=>formatter.format(val);
            })
        };
    }
    add(name, fc) {
        this.formats[name.toLowerCase().trim()] = fc;
    }
    addCached(name, fc) {
        this.formats[name.toLowerCase().trim()] = createCachedFormatter(fc);
    }
    format(value, format, lng, options1 = {}) {
        const formats = format.split(this.formatSeparator);
        if (formats.length > 1 && formats[0].indexOf('(') > 1 && formats[0].indexOf(')') < 0 && formats.find((f)=>f.indexOf(')') > -1)) {
            const lastIndex = formats.findIndex((f)=>f.indexOf(')') > -1);
            formats[0] = [
                formats[0],
                ...formats.splice(1, lastIndex)
            ].join(this.formatSeparator);
        }
        const result = formats.reduce((mem, f)=>{
            const { formatName, formatOptions } = parseFormatStr(f);
            if (this.formats[formatName]) {
                let formatted = mem;
                try {
                    const valOptions = options1?.formatParams?.[options1.interpolationkey] || {};
                    const l = valOptions.locale || valOptions.lng || options1.locale || options1.lng || lng;
                    formatted = this.formats[formatName](mem, l, {
                        ...formatOptions,
                        ...options1,
                        ...valOptions
                    });
                } catch (error) {
                    this.logger.warn(error);
                }
                return formatted;
            } else {
                this.logger.warn(`there was no format function for ${formatName}`);
            }
            return mem;
        }, value);
        return result;
    }
}
const removePending = (q, name)=>{
    if (q.pending[name] !== undefined) {
        delete q.pending[name];
        q.pendingCount--;
    }
};
class Connector extends EventEmitter {
    constructor(backend, store, services, options1 = {}){
        super();
        this.backend = backend;
        this.store = store;
        this.services = services;
        this.languageUtils = services.languageUtils;
        this.options = options1;
        this.logger = baseLogger.create('backendConnector');
        this.waitingReads = [];
        this.maxParallelReads = options1.maxParallelReads || 10;
        this.readingCalls = 0;
        this.maxRetries = options1.maxRetries >= 0 ? options1.maxRetries : 5;
        this.retryTimeout = options1.retryTimeout >= 1 ? options1.retryTimeout : 350;
        this.state = {};
        this.queue = [];
        this.backend?.init?.(services, options1.backend, options1);
    }
    queueLoad(languages, namespaces, options1, callback) {
        const toLoad = {};
        const pending = {};
        const toLoadLanguages = {};
        const toLoadNamespaces = {};
        languages.forEach((lng)=>{
            let hasAllNamespaces = true;
            namespaces.forEach((ns)=>{
                const name = `${lng}|${ns}`;
                if (!options1.reload && this.store.hasResourceBundle(lng, ns)) {
                    this.state[name] = 2;
                } else if (this.state[name] < 0) ;
                else if (this.state[name] === 1) {
                    if (pending[name] === undefined) pending[name] = true;
                } else {
                    this.state[name] = 1;
                    hasAllNamespaces = false;
                    if (pending[name] === undefined) pending[name] = true;
                    if (toLoad[name] === undefined) toLoad[name] = true;
                    if (toLoadNamespaces[ns] === undefined) toLoadNamespaces[ns] = true;
                }
            });
            if (!hasAllNamespaces) toLoadLanguages[lng] = true;
        });
        if (Object.keys(toLoad).length || Object.keys(pending).length) {
            this.queue.push({
                pending,
                pendingCount: Object.keys(pending).length,
                loaded: {},
                errors: [],
                callback
            });
        }
        return {
            toLoad: Object.keys(toLoad),
            pending: Object.keys(pending),
            toLoadLanguages: Object.keys(toLoadLanguages),
            toLoadNamespaces: Object.keys(toLoadNamespaces)
        };
    }
    loaded(name, err, data) {
        const s = name.split('|');
        const lng = s[0];
        const ns = s[1];
        if (err) this.emit('failedLoading', lng, ns, err);
        if (!err && data) {
            this.store.addResourceBundle(lng, ns, data, undefined, undefined, {
                skipCopy: true
            });
        }
        this.state[name] = err ? -1 : 2;
        if (err && data) this.state[name] = 0;
        const loaded = {};
        this.queue.forEach((q)=>{
            pushPath(q.loaded, [
                lng
            ], ns);
            removePending(q, name);
            if (err) q.errors.push(err);
            if (q.pendingCount === 0 && !q.done) {
                Object.keys(q.loaded).forEach((l)=>{
                    if (!loaded[l]) loaded[l] = {};
                    const loadedKeys = q.loaded[l];
                    if (loadedKeys.length) {
                        loadedKeys.forEach((n)=>{
                            if (loaded[l][n] === undefined) loaded[l][n] = true;
                        });
                    }
                });
                q.done = true;
                if (q.errors.length) {
                    q.callback(q.errors);
                } else {
                    q.callback();
                }
            }
        });
        this.emit('loaded', loaded);
        this.queue = this.queue.filter((q)=>!q.done);
    }
    read(lng, ns, fcName, tried = 0, wait = this.retryTimeout, callback) {
        if (!lng.length) return callback(null, {});
        if (this.readingCalls >= this.maxParallelReads) {
            this.waitingReads.push({
                lng,
                ns,
                fcName,
                tried,
                wait,
                callback
            });
            return;
        }
        this.readingCalls++;
        const resolver = (err, data)=>{
            this.readingCalls--;
            if (this.waitingReads.length > 0) {
                const next = this.waitingReads.shift();
                this.read(next.lng, next.ns, next.fcName, next.tried, next.wait, next.callback);
            }
            if (err && data && tried < this.maxRetries) {
                setTimeout(()=>{
                    this.read.call(this, lng, ns, fcName, tried + 1, wait * 2, callback);
                }, wait);
                return;
            }
            callback(err, data);
        };
        const fc = this.backend[fcName].bind(this.backend);
        if (fc.length === 2) {
            try {
                const r = fc(lng, ns);
                if (r && typeof r.then === 'function') {
                    r.then((data)=>resolver(null, data)).catch(resolver);
                } else {
                    resolver(null, r);
                }
            } catch (err) {
                resolver(err);
            }
            return;
        }
        return fc(lng, ns, resolver);
    }
    prepareLoading(languages, namespaces, options1 = {}, callback) {
        if (!this.backend) {
            this.logger.warn('No backend was added via i18next.use. Will not load resources.');
            return callback && callback();
        }
        if (isString(languages)) languages = this.languageUtils.toResolveHierarchy(languages);
        if (isString(namespaces)) namespaces = [
            namespaces
        ];
        const toLoad = this.queueLoad(languages, namespaces, options1, callback);
        if (!toLoad.toLoad.length) {
            if (!toLoad.pending.length) callback();
            return null;
        }
        toLoad.toLoad.forEach((name)=>{
            this.loadOne(name);
        });
    }
    load(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {}, callback);
    }
    reload(languages, namespaces, callback) {
        this.prepareLoading(languages, namespaces, {
            reload: true
        }, callback);
    }
    loadOne(name, prefix = '') {
        const s = name.split('|');
        const lng = s[0];
        const ns = s[1];
        this.read(lng, ns, 'read', undefined, undefined, (err, data)=>{
            if (err) this.logger.warn(`${prefix}loading namespace ${ns} for language ${lng} failed`, err);
            if (!err && data) this.logger.log(`${prefix}loaded namespace ${ns} for language ${lng}`, data);
            this.loaded(name, err, data);
        });
    }
    saveMissing(languages, namespace, key, fallbackValue, isUpdate, options1 = {}, clb = ()=>{}) {
        if (this.services?.utils?.hasLoadedNamespace && !this.services?.utils?.hasLoadedNamespace(namespace)) {
            this.logger.warn(`did not save key "${key}" as the namespace "${namespace}" was not yet loaded`, 'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!');
            return;
        }
        if (key === undefined || key === null || key === '') return;
        if (this.backend?.create) {
            const opts = {
                ...options1,
                isUpdate
            };
            const fc = this.backend.create.bind(this.backend);
            if (fc.length < 6) {
                try {
                    let r;
                    if (fc.length === 5) {
                        r = fc(languages, namespace, key, fallbackValue, opts);
                    } else {
                        r = fc(languages, namespace, key, fallbackValue);
                    }
                    if (r && typeof r.then === 'function') {
                        r.then((data)=>clb(null, data)).catch(clb);
                    } else {
                        clb(null, r);
                    }
                } catch (err) {
                    clb(err);
                }
            } else {
                fc(languages, namespace, key, fallbackValue, clb, opts);
            }
        }
        if (!languages || !languages[0]) return;
        this.store.addResource(languages[0], namespace, key, fallbackValue);
    }
}
const get = ()=>({
        debug: false,
        initAsync: true,
        ns: [
            'translation'
        ],
        defaultNS: [
            'translation'
        ],
        fallbackLng: [
            'dev'
        ],
        fallbackNS: false,
        supportedLngs: false,
        nonExplicitSupportedLngs: false,
        load: 'all',
        preload: false,
        simplifyPluralSuffix: true,
        keySeparator: '.',
        nsSeparator: ':',
        pluralSeparator: '_',
        contextSeparator: '_',
        partialBundledLanguages: false,
        saveMissing: false,
        updateMissing: false,
        saveMissingTo: 'fallback',
        saveMissingPlurals: true,
        missingKeyHandler: false,
        missingInterpolationHandler: false,
        postProcess: false,
        postProcessPassResolved: false,
        returnNull: false,
        returnEmptyString: true,
        returnObjects: false,
        joinArrays: false,
        returnedObjectHandler: false,
        parseMissingKeyHandler: false,
        appendNamespaceToMissingKey: false,
        appendNamespaceToCIMode: false,
        overloadTranslationOptionHandler: (args)=>{
            let ret = {};
            if (typeof args[1] === 'object') ret = args[1];
            if (isString(args[1])) ret.defaultValue = args[1];
            if (isString(args[2])) ret.tDescription = args[2];
            if (typeof args[2] === 'object' || typeof args[3] === 'object') {
                const options1 = args[3] || args[2];
                Object.keys(options1).forEach((key)=>{
                    ret[key] = options1[key];
                });
            }
            return ret;
        },
        interpolation: {
            escapeValue: true,
            format: (value)=>value,
            prefix: '{{',
            suffix: '}}',
            formatSeparator: ',',
            unescapePrefix: '-',
            nestingPrefix: '$t(',
            nestingSuffix: ')',
            nestingOptionsSeparator: ',',
            maxReplaces: 1000,
            skipOnVariables: true
        },
        cacheInBuiltFormats: true
    });
const transformOptions = (options1)=>{
    if (isString(options1.ns)) options1.ns = [
        options1.ns
    ];
    if (isString(options1.fallbackLng)) options1.fallbackLng = [
        options1.fallbackLng
    ];
    if (isString(options1.fallbackNS)) options1.fallbackNS = [
        options1.fallbackNS
    ];
    if (options1.supportedLngs?.indexOf?.('cimode') < 0) {
        options1.supportedLngs = options1.supportedLngs.concat([
            'cimode'
        ]);
    }
    if (typeof options1.initImmediate === 'boolean') options1.initAsync = options1.initImmediate;
    return options1;
};
const noop = ()=>{};
const bindMemberFunctions = (inst)=>{
    const mems = Object.getOwnPropertyNames(Object.getPrototypeOf(inst));
    mems.forEach((mem)=>{
        if (typeof inst[mem] === 'function') {
            inst[mem] = inst[mem].bind(inst);
        }
    });
};
class I18n extends EventEmitter {
    constructor(options1 = {}, callback){
        super();
        this.options = transformOptions(options1);
        this.services = {};
        this.logger = baseLogger;
        this.modules = {
            external: []
        };
        bindMemberFunctions(this);
        if (callback && !this.isInitialized && !options1.isClone) {
            if (!this.options.initAsync) {
                this.init(options1, callback);
                return this;
            }
            setTimeout(()=>{
                this.init(options1, callback);
            }, 0);
        }
    }
    init(options1 = {}, callback) {
        this.isInitializing = true;
        if (typeof options1 === 'function') {
            callback = options1;
            options1 = {};
        }
        if (options1.defaultNS == null && options1.ns) {
            if (isString(options1.ns)) {
                options1.defaultNS = options1.ns;
            } else if (options1.ns.indexOf('translation') < 0) {
                options1.defaultNS = options1.ns[0];
            }
        }
        const defOpts = get();
        this.options = {
            ...defOpts,
            ...this.options,
            ...transformOptions(options1)
        };
        this.options.interpolation = {
            ...defOpts.interpolation,
            ...this.options.interpolation
        };
        if (options1.keySeparator !== undefined) {
            this.options.userDefinedKeySeparator = options1.keySeparator;
        }
        if (options1.nsSeparator !== undefined) {
            this.options.userDefinedNsSeparator = options1.nsSeparator;
        }
        const createClassOnDemand = (ClassOrObject)=>{
            if (!ClassOrObject) return null;
            if (typeof ClassOrObject === 'function') return new ClassOrObject();
            return ClassOrObject;
        };
        if (!this.options.isClone) {
            if (this.modules.logger) {
                baseLogger.init(createClassOnDemand(this.modules.logger), this.options);
            } else {
                baseLogger.init(null, this.options);
            }
            let formatter;
            if (this.modules.formatter) {
                formatter = this.modules.formatter;
            } else {
                formatter = Formatter;
            }
            const lu = new LanguageUtil(this.options);
            this.store = new ResourceStore(this.options.resources, this.options);
            const s = this.services;
            s.logger = baseLogger;
            s.resourceStore = this.store;
            s.languageUtils = lu;
            s.pluralResolver = new PluralResolver(lu, {
                prepend: this.options.pluralSeparator,
                simplifyPluralSuffix: this.options.simplifyPluralSuffix
            });
            if (formatter && (!this.options.interpolation.format || this.options.interpolation.format === defOpts.interpolation.format)) {
                s.formatter = createClassOnDemand(formatter);
                s.formatter.init(s, this.options);
                this.options.interpolation.format = s.formatter.format.bind(s.formatter);
            }
            s.interpolator = new Interpolator(this.options);
            s.utils = {
                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
            };
            s.backendConnector = new Connector(createClassOnDemand(this.modules.backend), s.resourceStore, s, this.options);
            s.backendConnector.on('*', (event, ...args)=>{
                this.emit(event, ...args);
            });
            if (this.modules.languageDetector) {
                s.languageDetector = createClassOnDemand(this.modules.languageDetector);
                if (s.languageDetector.init) s.languageDetector.init(s, this.options.detection, this.options);
            }
            if (this.modules.i18nFormat) {
                s.i18nFormat = createClassOnDemand(this.modules.i18nFormat);
                if (s.i18nFormat.init) s.i18nFormat.init(this);
            }
            this.translator = new Translator(this.services, this.options);
            this.translator.on('*', (event, ...args)=>{
                this.emit(event, ...args);
            });
            this.modules.external.forEach((m)=>{
                if (m.init) m.init(this);
            });
        }
        this.format = this.options.interpolation.format;
        if (!callback) callback = noop;
        if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
            const codes = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
            if (codes.length > 0 && codes[0] !== 'dev') this.options.lng = codes[0];
        }
        if (!this.services.languageDetector && !this.options.lng) {
            this.logger.warn('init: no languageDetector is used and no lng is defined');
        }
        const storeApi = [
            'getResource',
            'hasResourceBundle',
            'getResourceBundle',
            'getDataByLanguage'
        ];
        storeApi.forEach((fcName)=>{
            this[fcName] = (...args)=>this.store[fcName](...args);
        });
        const storeApiChained = [
            'addResource',
            'addResources',
            'addResourceBundle',
            'removeResourceBundle'
        ];
        storeApiChained.forEach((fcName)=>{
            this[fcName] = (...args)=>{
                this.store[fcName](...args);
                return this;
            };
        });
        const deferred = defer();
        const load = ()=>{
            const finish = (err, t)=>{
                this.isInitializing = false;
                if (this.isInitialized && !this.initializedStoreOnce) this.logger.warn('init: i18next is already initialized. You should call init just once!');
                this.isInitialized = true;
                if (!this.options.isClone) this.logger.log('initialized', this.options);
                this.emit('initialized', this.options);
                deferred.resolve(t);
                callback(err, t);
            };
            if (this.languages && !this.isInitialized) return finish(null, this.t.bind(this));
            this.changeLanguage(this.options.lng, finish);
        };
        if (this.options.resources || !this.options.initAsync) {
            load();
        } else {
            setTimeout(load, 0);
        }
        return deferred;
    }
    loadResources(language, callback = noop) {
        let usedCallback = callback;
        const usedLng = isString(language) ? language : this.language;
        if (typeof language === 'function') usedCallback = language;
        if (!this.options.resources || this.options.partialBundledLanguages) {
            if (usedLng?.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return usedCallback();
            const toLoad = [];
            const append = (lng)=>{
                if (!lng) return;
                if (lng === 'cimode') return;
                const lngs = this.services.languageUtils.toResolveHierarchy(lng);
                lngs.forEach((l)=>{
                    if (l === 'cimode') return;
                    if (toLoad.indexOf(l) < 0) toLoad.push(l);
                });
            };
            if (!usedLng) {
                const fallbacks = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                fallbacks.forEach((l)=>append(l));
            } else {
                append(usedLng);
            }
            this.options.preload?.forEach?.((l)=>append(l));
            this.services.backendConnector.load(toLoad, this.options.ns, (e)=>{
                if (!e && !this.resolvedLanguage && this.language) this.setResolvedLanguage(this.language);
                usedCallback(e);
            });
        } else {
            usedCallback(null);
        }
    }
    reloadResources(lngs, ns, callback) {
        const deferred = defer();
        if (typeof lngs === 'function') {
            callback = lngs;
            lngs = undefined;
        }
        if (typeof ns === 'function') {
            callback = ns;
            ns = undefined;
        }
        if (!lngs) lngs = this.languages;
        if (!ns) ns = this.options.ns;
        if (!callback) callback = noop;
        this.services.backendConnector.reload(lngs, ns, (err)=>{
            deferred.resolve();
            callback(err);
        });
        return deferred;
    }
    use(module) {
        if (!module) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
        if (!module.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
        if (module.type === 'backend') {
            this.modules.backend = module;
        }
        if (module.type === 'logger' || module.log && module.warn && module.error) {
            this.modules.logger = module;
        }
        if (module.type === 'languageDetector') {
            this.modules.languageDetector = module;
        }
        if (module.type === 'i18nFormat') {
            this.modules.i18nFormat = module;
        }
        if (module.type === 'postProcessor') {
            postProcessor.addPostProcessor(module);
        }
        if (module.type === 'formatter') {
            this.modules.formatter = module;
        }
        if (module.type === '3rdParty') {
            this.modules.external.push(module);
        }
        return this;
    }
    setResolvedLanguage(l) {
        if (!l || !this.languages) return;
        if ([
            'cimode',
            'dev'
        ].indexOf(l) > -1) return;
        for(let li = 0; li < this.languages.length; li++){
            const lngInLngs = this.languages[li];
            if ([
                'cimode',
                'dev'
            ].indexOf(lngInLngs) > -1) continue;
            if (this.store.hasLanguageSomeTranslations(lngInLngs)) {
                this.resolvedLanguage = lngInLngs;
                break;
            }
        }
        if (!this.resolvedLanguage && this.languages.indexOf(l) < 0 && this.store.hasLanguageSomeTranslations(l)) {
            this.resolvedLanguage = l;
            this.languages.unshift(l);
        }
    }
    changeLanguage(lng, callback) {
        this.isLanguageChangingTo = lng;
        const deferred = defer();
        this.emit('languageChanging', lng);
        const setLngProps = (l)=>{
            this.language = l;
            this.languages = this.services.languageUtils.toResolveHierarchy(l);
            this.resolvedLanguage = undefined;
            this.setResolvedLanguage(l);
        };
        const done = (err, l)=>{
            if (l) {
                if (this.isLanguageChangingTo === lng) {
                    setLngProps(l);
                    this.translator.changeLanguage(l);
                    this.isLanguageChangingTo = undefined;
                    this.emit('languageChanged', l);
                    this.logger.log('languageChanged', l);
                }
            } else {
                this.isLanguageChangingTo = undefined;
            }
            deferred.resolve((...args)=>this.t(...args));
            if (callback) callback(err, (...args)=>this.t(...args));
        };
        const setLng = (lngs)=>{
            if (!lng && !lngs && this.services.languageDetector) lngs = [];
            const fl = isString(lngs) ? lngs : lngs && lngs[0];
            const l = this.store.hasLanguageSomeTranslations(fl) ? fl : this.services.languageUtils.getBestMatchFromCodes(isString(lngs) ? [
                lngs
            ] : lngs);
            if (l) {
                if (!this.language) {
                    setLngProps(l);
                }
                if (!this.translator.language) this.translator.changeLanguage(l);
                this.services.languageDetector?.cacheUserLanguage?.(l);
            }
            this.loadResources(l, (err)=>{
                done(err, l);
            });
        };
        if (!lng && this.services.languageDetector && !this.services.languageDetector.async) {
            setLng(this.services.languageDetector.detect());
        } else if (!lng && this.services.languageDetector && this.services.languageDetector.async) {
            if (this.services.languageDetector.detect.length === 0) {
                this.services.languageDetector.detect().then(setLng);
            } else {
                this.services.languageDetector.detect(setLng);
            }
        } else {
            setLng(lng);
        }
        return deferred;
    }
    getFixedT(lng, ns, keyPrefix) {
        const fixedT = (key, opts, ...rest)=>{
            let o;
            if (typeof opts !== 'object') {
                o = this.options.overloadTranslationOptionHandler([
                    key,
                    opts
                ].concat(rest));
            } else {
                o = {
                    ...opts
                };
            }
            o.lng = o.lng || fixedT.lng;
            o.lngs = o.lngs || fixedT.lngs;
            o.ns = o.ns || fixedT.ns;
            if (o.keyPrefix !== '') o.keyPrefix = o.keyPrefix || keyPrefix || fixedT.keyPrefix;
            const keySeparator = this.options.keySeparator || '.';
            let resultKey;
            if (o.keyPrefix && Array.isArray(key)) {
                resultKey = key.map((k)=>`${o.keyPrefix}${keySeparator}${k}`);
            } else {
                resultKey = o.keyPrefix ? `${o.keyPrefix}${keySeparator}${key}` : key;
            }
            return this.t(resultKey, o);
        };
        if (isString(lng)) {
            fixedT.lng = lng;
        } else {
            fixedT.lngs = lng;
        }
        fixedT.ns = ns;
        fixedT.keyPrefix = keyPrefix;
        return fixedT;
    }
    t(...args) {
        return this.translator?.translate(...args);
    }
    exists(...args) {
        return this.translator?.exists(...args);
    }
    setDefaultNamespace(ns) {
        this.options.defaultNS = ns;
    }
    hasLoadedNamespace(ns, options1 = {}) {
        if (!this.isInitialized) {
            this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages);
            return false;
        }
        if (!this.languages || !this.languages.length) {
            this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages);
            return false;
        }
        const lng = options1.lng || this.resolvedLanguage || this.languages[0];
        const fallbackLng = this.options ? this.options.fallbackLng : false;
        const lastLng = this.languages[this.languages.length - 1];
        if (lng.toLowerCase() === 'cimode') return true;
        const loadNotPending = (l, n)=>{
            const loadState = this.services.backendConnector.state[`${l}|${n}`];
            return loadState === -1 || loadState === 0 || loadState === 2;
        };
        if (options1.precheck) {
            const preResult = options1.precheck(this, loadNotPending);
            if (preResult !== undefined) return preResult;
        }
        if (this.hasResourceBundle(lng, ns)) return true;
        if (!this.services.backendConnector.backend || this.options.resources && !this.options.partialBundledLanguages) return true;
        if (loadNotPending(lng, ns) && (!fallbackLng || loadNotPending(lastLng, ns))) return true;
        return false;
    }
    loadNamespaces(ns, callback) {
        const deferred = defer();
        if (!this.options.ns) {
            if (callback) callback();
            return Promise.resolve();
        }
        if (isString(ns)) ns = [
            ns
        ];
        ns.forEach((n)=>{
            if (this.options.ns.indexOf(n) < 0) this.options.ns.push(n);
        });
        this.loadResources((err)=>{
            deferred.resolve();
            if (callback) callback(err);
        });
        return deferred;
    }
    loadLanguages(lngs, callback) {
        const deferred = defer();
        if (isString(lngs)) lngs = [
            lngs
        ];
        const preloaded = this.options.preload || [];
        const newLngs = lngs.filter((lng)=>preloaded.indexOf(lng) < 0 && this.services.languageUtils.isSupportedCode(lng));
        if (!newLngs.length) {
            if (callback) callback();
            return Promise.resolve();
        }
        this.options.preload = preloaded.concat(newLngs);
        this.loadResources((err)=>{
            deferred.resolve();
            if (callback) callback(err);
        });
        return deferred;
    }
    dir(lng) {
        if (!lng) lng = this.resolvedLanguage || (this.languages?.length > 0 ? this.languages[0] : this.language);
        if (!lng) return 'rtl';
        const rtlLngs = [
            'ar',
            'shu',
            'sqr',
            'ssh',
            'xaa',
            'yhd',
            'yud',
            'aao',
            'abh',
            'abv',
            'acm',
            'acq',
            'acw',
            'acx',
            'acy',
            'adf',
            'ads',
            'aeb',
            'aec',
            'afb',
            'ajp',
            'apc',
            'apd',
            'arb',
            'arq',
            'ars',
            'ary',
            'arz',
            'auz',
            'avl',
            'ayh',
            'ayl',
            'ayn',
            'ayp',
            'bbz',
            'pga',
            'he',
            'iw',
            'ps',
            'pbt',
            'pbu',
            'pst',
            'prp',
            'prd',
            'ug',
            'ur',
            'ydd',
            'yds',
            'yih',
            'ji',
            'yi',
            'hbo',
            'men',
            'xmn',
            'fa',
            'jpr',
            'peo',
            'pes',
            'prs',
            'dv',
            'sam',
            'ckb'
        ];
        const languageUtils = this.services?.languageUtils || new LanguageUtil(get());
        return rtlLngs.indexOf(languageUtils.getLanguagePartFromCode(lng)) > -1 || lng.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
    }
    static createInstance(options1 = {}, callback) {
        return new I18n(options1, callback);
    }
    cloneInstance(options1 = {}, callback = noop) {
        const forkResourceStore = options1.forkResourceStore;
        if (forkResourceStore) delete options1.forkResourceStore;
        const mergedOptions = {
            ...this.options,
            ...options1,
            ...{
                isClone: true
            }
        };
        const clone = new I18n(mergedOptions);
        if (options1.debug !== undefined || options1.prefix !== undefined) {
            clone.logger = clone.logger.clone(options1);
        }
        const membersToCopy = [
            'store',
            'services',
            'language'
        ];
        membersToCopy.forEach((m)=>{
            clone[m] = this[m];
        });
        clone.services = {
            ...this.services
        };
        clone.services.utils = {
            hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        if (forkResourceStore) {
            const clonedData = Object.keys(this.store.data).reduce((prev, l)=>{
                prev[l] = {
                    ...this.store.data[l]
                };
                prev[l] = Object.keys(prev[l]).reduce((acc, n)=>{
                    acc[n] = {
                        ...prev[l][n]
                    };
                    return acc;
                }, prev[l]);
                return prev;
            }, {});
            clone.store = new ResourceStore(clonedData, mergedOptions);
            clone.services.resourceStore = clone.store;
        }
        clone.translator = new Translator(clone.services, mergedOptions);
        clone.translator.on('*', (event, ...args)=>{
            clone.emit(event, ...args);
        });
        clone.init(mergedOptions, callback);
        clone.translator.options = mergedOptions;
        clone.translator.backendConnector.services.utils = {
            hasLoadedNamespace: clone.hasLoadedNamespace.bind(clone)
        };
        return clone;
    }
    toJSON() {
        return {
            options: this.options,
            store: this.store,
            language: this.language,
            languages: this.languages,
            resolvedLanguage: this.resolvedLanguage
        };
    }
}
const instance = I18n.createInstance();
instance.createInstance = I18n.createInstance;
const createInstance = instance.createInstance;
const dir = instance.dir;
const init = instance.init;
const loadResources = instance.loadResources;
const reloadResources = instance.reloadResources;
const use = instance.use;
const changeLanguage = instance.changeLanguage;
const getFixedT = instance.getFixedT;
const t = instance.t;
const exists = instance.exists;
const setDefaultNamespace = instance.setDefaultNamespace;
const hasLoadedNamespace = instance.hasLoadedNamespace;
const loadNamespaces = instance.loadNamespaces;
const loadLanguages = instance.loadLanguages;
;
}}),
"[project]/node_modules/i18next-browser-languagedetector/dist/esm/i18nextBrowserLanguageDetector.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Browser)
});
const { slice, forEach } = [];
function defaults(obj) {
    forEach.call(slice.call(arguments, 1), (source)=>{
        if (source) {
            for(const prop in source){
                if (obj[prop] === undefined) obj[prop] = source[prop];
            }
        }
    });
    return obj;
}
function hasXSS(input) {
    if (typeof input !== 'string') return false;
    // Common XSS attack patterns
    const xssPatterns = [
        /<\s*script.*?>/i,
        /<\s*\/\s*script\s*>/i,
        /<\s*img.*?on\w+\s*=/i,
        /<\s*\w+\s*on\w+\s*=.*?>/i,
        /javascript\s*:/i,
        /vbscript\s*:/i,
        /expression\s*\(/i,
        /eval\s*\(/i,
        /alert\s*\(/i,
        /document\.cookie/i,
        /document\.write\s*\(/i,
        /window\.location/i,
        /innerHTML/i
    ];
    return xssPatterns.some((pattern)=>pattern.test(input));
}
// eslint-disable-next-line no-control-regex
const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
const serializeCookie = function(name, val) {
    let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
        path: '/'
    };
    const opt = options;
    const value = encodeURIComponent(val);
    let str = `${name}=${value}`;
    if (opt.maxAge > 0) {
        const maxAge = opt.maxAge - 0;
        if (Number.isNaN(maxAge)) throw new Error('maxAge should be a Number');
        str += `; Max-Age=${Math.floor(maxAge)}`;
    }
    if (opt.domain) {
        if (!fieldContentRegExp.test(opt.domain)) {
            throw new TypeError('option domain is invalid');
        }
        str += `; Domain=${opt.domain}`;
    }
    if (opt.path) {
        if (!fieldContentRegExp.test(opt.path)) {
            throw new TypeError('option path is invalid');
        }
        str += `; Path=${opt.path}`;
    }
    if (opt.expires) {
        if (typeof opt.expires.toUTCString !== 'function') {
            throw new TypeError('option expires is invalid');
        }
        str += `; Expires=${opt.expires.toUTCString()}`;
    }
    if (opt.httpOnly) str += '; HttpOnly';
    if (opt.secure) str += '; Secure';
    if (opt.sameSite) {
        const sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
        switch(sameSite){
            case true:
                str += '; SameSite=Strict';
                break;
            case 'lax':
                str += '; SameSite=Lax';
                break;
            case 'strict':
                str += '; SameSite=Strict';
                break;
            case 'none':
                str += '; SameSite=None';
                break;
            default:
                throw new TypeError('option sameSite is invalid');
        }
    }
    if (opt.partitioned) str += '; Partitioned';
    return str;
};
const cookie = {
    create (name, value, minutes, domain) {
        let cookieOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
            path: '/',
            sameSite: 'strict'
        };
        if (minutes) {
            cookieOptions.expires = new Date();
            cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1000);
        }
        if (domain) cookieOptions.domain = domain;
        document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
    },
    read (name) {
        const nameEQ = `${name}=`;
        const ca = document.cookie.split(';');
        for(let i = 0; i < ca.length; i++){
            let c = ca[i];
            while(c.charAt(0) === ' ')c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    },
    remove (name) {
        this.create(name, '', -1);
    }
};
var cookie$1 = {
    name: 'cookie',
    // Deconstruct the options object and extract the lookupCookie property
    lookup (_ref) {
        let { lookupCookie } = _ref;
        if (lookupCookie && typeof document !== 'undefined') {
            return cookie.read(lookupCookie) || undefined;
        }
        return undefined;
    },
    // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
    cacheUserLanguage (lng, _ref2) {
        let { lookupCookie, cookieMinutes, cookieDomain, cookieOptions } = _ref2;
        if (lookupCookie && typeof document !== 'undefined') {
            cookie.create(lookupCookie, lng, cookieMinutes, cookieDomain, cookieOptions);
        }
    }
};
var querystring = {
    name: 'querystring',
    // Deconstruct the options object and extract the lookupQuerystring property
    lookup (_ref) {
        let { lookupQuerystring } = _ref;
        let found;
        if (typeof window !== 'undefined') {
            let { search } = window.location;
            if (!window.location.search && window.location.hash?.indexOf('?') > -1) {
                search = window.location.hash.substring(window.location.hash.indexOf('?'));
            }
            const query = search.substring(1);
            const params = query.split('&');
            for(let i = 0; i < params.length; i++){
                const pos = params[i].indexOf('=');
                if (pos > 0) {
                    const key = params[i].substring(0, pos);
                    if (key === lookupQuerystring) {
                        found = params[i].substring(pos + 1);
                    }
                }
            }
        }
        return found;
    }
};
let hasLocalStorageSupport = null;
const localStorageAvailable = ()=>{
    if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;
    try {
        hasLocalStorageSupport = typeof window !== 'undefined' && window.localStorage !== null;
        if (!hasLocalStorageSupport) {
            return false;
        }
        const testKey = 'i18next.translate.boo';
        window.localStorage.setItem(testKey, 'foo');
        window.localStorage.removeItem(testKey);
    } catch (e) {
        hasLocalStorageSupport = false;
    }
    return hasLocalStorageSupport;
};
var localStorage = {
    name: 'localStorage',
    // Deconstruct the options object and extract the lookupLocalStorage property
    lookup (_ref) {
        let { lookupLocalStorage } = _ref;
        if (lookupLocalStorage && localStorageAvailable()) {
            return window.localStorage.getItem(lookupLocalStorage) || undefined; // Undefined ensures type consistency with the previous version of this function
        }
        return undefined;
    },
    // Deconstruct the options object and extract the lookupLocalStorage property
    cacheUserLanguage (lng, _ref2) {
        let { lookupLocalStorage } = _ref2;
        if (lookupLocalStorage && localStorageAvailable()) {
            window.localStorage.setItem(lookupLocalStorage, lng);
        }
    }
};
let hasSessionStorageSupport = null;
const sessionStorageAvailable = ()=>{
    if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;
    try {
        hasSessionStorageSupport = typeof window !== 'undefined' && window.sessionStorage !== null;
        if (!hasSessionStorageSupport) {
            return false;
        }
        const testKey = 'i18next.translate.boo';
        window.sessionStorage.setItem(testKey, 'foo');
        window.sessionStorage.removeItem(testKey);
    } catch (e) {
        hasSessionStorageSupport = false;
    }
    return hasSessionStorageSupport;
};
var sessionStorage = {
    name: 'sessionStorage',
    lookup (_ref) {
        let { lookupSessionStorage } = _ref;
        if (lookupSessionStorage && sessionStorageAvailable()) {
            return window.sessionStorage.getItem(lookupSessionStorage) || undefined;
        }
        return undefined;
    },
    cacheUserLanguage (lng, _ref2) {
        let { lookupSessionStorage } = _ref2;
        if (lookupSessionStorage && sessionStorageAvailable()) {
            window.sessionStorage.setItem(lookupSessionStorage, lng);
        }
    }
};
var navigator$1 = {
    name: 'navigator',
    lookup (options) {
        const found = [];
        if (typeof navigator !== 'undefined') {
            const { languages, userLanguage, language } = navigator;
            if (languages) {
                // chrome only; not an array, so can't use .push.apply instead of iterating
                for(let i = 0; i < languages.length; i++){
                    found.push(languages[i]);
                }
            }
            if (userLanguage) {
                found.push(userLanguage);
            }
            if (language) {
                found.push(language);
            }
        }
        return found.length > 0 ? found : undefined;
    }
};
var htmlTag = {
    name: 'htmlTag',
    // Deconstruct the options object and extract the htmlTag property
    lookup (_ref) {
        let { htmlTag } = _ref;
        let found;
        const internalHtmlTag = htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);
        if (internalHtmlTag && typeof internalHtmlTag.getAttribute === 'function') {
            found = internalHtmlTag.getAttribute('lang');
        }
        return found;
    }
};
var path = {
    name: 'path',
    // Deconstruct the options object and extract the lookupFromPathIndex property
    lookup (_ref) {
        let { lookupFromPathIndex } = _ref;
        if (typeof window === 'undefined') return undefined;
        const language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
        if (!Array.isArray(language)) return undefined;
        const index = typeof lookupFromPathIndex === 'number' ? lookupFromPathIndex : 0;
        return language[index]?.replace('/', '');
    }
};
var subdomain = {
    name: 'subdomain',
    lookup (_ref) {
        let { lookupFromSubdomainIndex } = _ref;
        // If given get the subdomain index else 1
        const internalLookupFromSubdomainIndex = typeof lookupFromSubdomainIndex === 'number' ? lookupFromSubdomainIndex + 1 : 1;
        // get all matches if window.location. is existing
        // first item of match is the match itself and the second is the first group match which should be the first subdomain match
        // is the hostname no public domain get the or option of localhost
        const language = typeof window !== 'undefined' && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);
        // if there is no match (null) return undefined
        if (!language) return undefined;
        // return the given group match
        return language[internalLookupFromSubdomainIndex];
    }
};
// some environments, throws when accessing document.cookie
let canCookies = false;
try {
    // eslint-disable-next-line no-unused-expressions
    document.cookie;
    canCookies = true;
// eslint-disable-next-line no-empty
} catch (e) {}
const order = [
    'querystring',
    'cookie',
    'localStorage',
    'sessionStorage',
    'navigator',
    'htmlTag'
];
if (!canCookies) order.splice(1, 1);
const getDefaults = ()=>({
        order,
        lookupQuerystring: 'lng',
        lookupCookie: 'i18next',
        lookupLocalStorage: 'i18nextLng',
        lookupSessionStorage: 'i18nextLng',
        // cache user language
        caches: [
            'localStorage'
        ],
        excludeCacheFor: [
            'cimode'
        ],
        // cookieMinutes: 10,
        // cookieDomain: 'myDomain'
        convertDetectedLanguage: (l)=>l
    });
class Browser {
    constructor(services){
        let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        this.type = 'languageDetector';
        this.detectors = {};
        this.init(services, options);
    }
    init() {
        let services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            languageUtils: {}
        };
        let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        let i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        this.services = services;
        this.options = defaults(options, this.options || {}, getDefaults());
        if (typeof this.options.convertDetectedLanguage === 'string' && this.options.convertDetectedLanguage.indexOf('15897') > -1) {
            this.options.convertDetectedLanguage = (l)=>l.replace('-', '_');
        }
        // backwards compatibility
        if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
        this.i18nOptions = i18nOptions;
        this.addDetector(cookie$1);
        this.addDetector(querystring);
        this.addDetector(localStorage);
        this.addDetector(sessionStorage);
        this.addDetector(navigator$1);
        this.addDetector(htmlTag);
        this.addDetector(path);
        this.addDetector(subdomain);
    }
    addDetector(detector) {
        this.detectors[detector.name] = detector;
        return this;
    }
    detect() {
        let detectionOrder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.order;
        let detected = [];
        detectionOrder.forEach((detectorName)=>{
            if (this.detectors[detectorName]) {
                let lookup = this.detectors[detectorName].lookup(this.options);
                if (lookup && typeof lookup === 'string') lookup = [
                    lookup
                ];
                if (lookup) detected = detected.concat(lookup);
            }
        });
        detected = detected.filter((d)=>d !== undefined && d !== null && !hasXSS(d)).map((d)=>this.options.convertDetectedLanguage(d));
        if (this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes) return detected; // new i18next v19.5.0
        return detected.length > 0 ? detected[0] : null; // a little backward compatibility
    }
    cacheUserLanguage(lng) {
        let caches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.caches;
        if (!caches) return;
        if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
        caches.forEach((cacheName)=>{
            if (this.detectors[cacheName]) this.detectors[cacheName].cacheUserLanguage(lng, this.options);
        });
    }
}
Browser.type = 'languageDetector';
;
}}),
}]);

//# sourceMappingURL=_99e75910._.js.map