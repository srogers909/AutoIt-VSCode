'use strict'

var {
    CompletionItemKind,
    SnippetString
} = require('vscode')

var items = [{
        label: '_WinAPI_DefSubclassProc',
        documentation: 'Calls the next handler in a window\'s subclass chain',
        insertText: '_WinAPI_DefSubclassProc(${})'
    },
    {
        label: '_WinAPI_DllGetVersion',
        documentation: 'Retrieves a DLL-specific version information',
        insertText: '_WinAPI_DllGetVersion(${})'
    },
    {
        label: '_WinAPI_GetAllUsersProfileDirectory',
        documentation: 'Retrieves the path to the root of the directory that contains program data shared by all users',
        insertText: '_WinAPI_GetAllUsersProfileDirectory(${})'
    },
    {
        label: '_WinAPI_GetDefaultUserProfileDirectory',
        documentation: 'Retrieves the path to the root of the default user\'s profile',
        insertText: '_WinAPI_GetDefaultUserProfileDirectory(${})'
    },
    {
        label: '_WinAPI_GetWindowSubclass',
        documentation: 'Retrieves the reference data for the specified window subclass callback',
        insertText: '_WinAPI_GetWindowSubclass(${})'
    },
    {
        label: '_WinAPI_RemoveWindowSubclass',
        documentation: 'Removes a subclass callback from a window',
        insertText: '_WinAPI_RemoveWindowSubclass(${})'
    },
    {
        label: '_WinAPI_SetCurrentProcessExplicitAppUserModelID',
        documentation: 'Specifies a unique application-defined Application User Model ID that identifies the current process to the taskbar',
        insertText: '_WinAPI_SetCurrentProcessExplicitAppUserModelID(${})'
    },
    {
        label: '_WinAPI_SetWindowSubclass',
        documentation: 'Installs or updates a window subclass callback',
        insertText: '_WinAPI_SetWindowSubclass(${})'
    },
    {
        label: '_WinAPI_ShellAddToRecentDocs',
        documentation: 'Adds a file to the most recently and frequently item list',
        insertText: '_WinAPI_ShellAddToRecentDocs(${})'
    },
    {
        label: '_WinAPI_ShellChangeNotify',
        documentation: 'Notifies the system of an event that an application has performed',
        insertText: '_WinAPI_ShellChangeNotify(${})'
    },
    {
        label: '_WinAPI_ShellChangeNotifyDeregister',
        documentation: 'Unregisters the client\'s window',
        insertText: '_WinAPI_ShellChangeNotifyDeregister(${})'
    },
    {
        label: '_WinAPI_ShellChangeNotifyRegister',
        documentation: 'Registers a window to receive notifications from the file system or Shell',
        insertText: '_WinAPI_ShellChangeNotifyRegister(${})'
    },
    {
        label: '_WinAPI_ShellCreateDirectory',
        documentation: 'Creates a new file system folder',
        insertText: '_WinAPI_ShellCreateDirectory(${})'
    },
    {
        label: '_WinAPI_ShellEmptyRecycleBin',
        documentation: 'Empties the Recycle Bin on the specified drive',
        insertText: '_WinAPI_ShellEmptyRecycleBin(${})'
    },
    {
        label: '_WinAPI_ShellExecute',
        documentation: 'Performs an operation on a specified file',
        insertText: '_WinAPI_ShellExecute(${})'
    },
    {
        label: '_WinAPI_ShellExecuteEx',
        documentation: 'Performs an operation on a specified file',
        insertText: '_WinAPI_ShellExecuteEx(${})'
    },
    {
        label: '_WinAPI_ShellExtractAssociatedIcon',
        documentation: 'Returns a handle to the icon that associated with the specified file\'s',
        insertText: '_WinAPI_ShellExtractAssociatedIcon(${})'
    },
    {
        label: '_WinAPI_ShellExtractIcon',
        documentation: 'Extracts the icon with the specified dimension from the specified file',
        insertText: '_WinAPI_ShellExtractIcon(${})'
    },
    {
        label: '_WinAPI_ShellFileOperation',
        documentation: 'Copies, moves, renames, or deletes a file system object',
        insertText: '_WinAPI_ShellFileOperation(${})'
    },
    {
        label: '_WinAPI_ShellFlushSFCache',
        documentation: 'Flushes the special folder cache',
        insertText: '_WinAPI_ShellFlushSFCache(${})'
    },
    {
        label: '_WinAPI_ShellGetFileInfo',
        documentation: 'Retrieves information about an object in the file system',
        insertText: '_WinAPI_ShellGetFileInfo(${})'
    },
    {
        label: '_WinAPI_ShellGetIconOverlayIndex',
        documentation: 'Retrieves the index of the overlay icon in the system image list',
        insertText: '_WinAPI_ShellGetIconOverlayIndex(${})'
    },
    {
        label: '_WinAPI_ShellGetKnownFolderIDList',
        documentation: 'Retrieves the path of a known folder as an ITEMIDLIST structure',
        insertText: '_WinAPI_ShellGetKnownFolderIDList(${})'
    },
    {
        label: '_WinAPI_ShellGetKnownFolderPath',
        documentation: 'Retrieves the full path of a known folder identified',
        insertText: '_WinAPI_ShellGetKnownFolderPath(${})'
    },
    {
        label: '_WinAPI_ShellGetLocalizedName',
        documentation: 'Retrieves the localized name of a file in a Shell folder',
        insertText: '_WinAPI_ShellGetLocalizedName(${})'
    },
    {
        label: '_WinAPI_ShellGetPathFromIDList',
        documentation: 'Converts an item identifier list to a file system path',
        insertText: '_WinAPI_ShellGetPathFromIDList(${})'
    },
    {
        label: '_WinAPI_ShellGetSetFolderCustomSettings',
        documentation: 'Sets or retrieves custom folder settings',
        insertText: '_WinAPI_ShellGetSetFolderCustomSettings(${})'
    },
    {
        label: '_WinAPI_ShellGetSettings',
        documentation: 'Retrieves Shell state settings',
        insertText: '_WinAPI_ShellGetSettings(${})'
    },
    {
        label: '_WinAPI_ShellGetSpecialFolderLocation',
        documentation: 'Retrieves a pointer to the ITEMIDLIST structure (PIDL) of a special folder',
        insertText: '_WinAPI_ShellGetSpecialFolderLocation(${})'
    },
    {
        label: '_WinAPI_ShellGetSpecialFolderPath',
        documentation: 'Retrieves the path of a special folder',
        insertText: '_WinAPI_ShellGetSpecialFolderPath(${})'
    },
    {
        label: '_WinAPI_ShellGetStockIconInfo',
        documentation: 'Retrieves information about system-defined Shell icons',
        insertText: '_WinAPI_ShellGetStockIconInfo(${})'
    },
    {
        label: '_WinAPI_ShellILCreateFromPath',
        documentation: 'Creates a pointer to an item identifier list (PIDL) from a path',
        insertText: '_WinAPI_ShellILCreateFromPath(${})'
    },
    {
        label: '_WinAPI_ShellNotifyIcon',
        documentation: 'Sends a message to the taskbar\'s status area',
        insertText: '_WinAPI_ShellNotifyIcon(${})'
    },
    {
        label: '_WinAPI_ShellNotifyIconGetRect',
        documentation: 'Gets the screen coordinates of the bounding rectangle of a notification icon',
        insertText: '_WinAPI_ShellNotifyIconGetRect(${})'
    },
    {
        label: '_WinAPI_ShellObjectProperties',
        documentation: 'Invokes the Properties context menu command on a Shell object',
        insertText: '_WinAPI_ShellObjectProperties(${})'
    },
    {
        label: '_WinAPI_ShellOpenFolderAndSelectItems',
        documentation: 'Opens a Windows Explorer window with specified items in a particular folder selected',
        insertText: '_WinAPI_ShellOpenFolderAndSelectItems(${})'
    },
    {
        label: '_WinAPI_ShellQueryRecycleBin',
        documentation: 'Retrieves the size of the Recycle Bin and the number of items in it, for a specified drive',
        insertText: '_WinAPI_ShellQueryRecycleBin(${})'
    },
    {
        label: '_WinAPI_ShellQueryUserNotificationState',
        documentation: 'Checks the state of the computer for the current user',
        insertText: '_WinAPI_ShellQueryUserNotificationState(${})'
    },
    {
        label: '_WinAPI_ShellRemoveLocalizedName',
        documentation: 'Removes the localized name of a file in a Shell folder',
        insertText: '_WinAPI_ShellRemoveLocalizedName(${})'
    },
    {
        label: '_WinAPI_ShellRestricted',
        documentation: 'Determines whether a specified administrator policy is in effect',
        insertText: '_WinAPI_ShellRestricted(${})'
    },
    {
        label: '_WinAPI_ShellSetKnownFolderPath',
        documentation: 'Redirects a known folder to a new location',
        insertText: '_WinAPI_ShellSetKnownFolderPath(${})'
    },
    {
        label: '_WinAPI_ShellSetLocalizedName',
        documentation: 'Sets the localized name of a file in a Shell folder',
        insertText: '_WinAPI_ShellSetLocalizedName(${})'
    },
    {
        label: '_WinAPI_ShellSetSettings',
        documentation: 'Sets Shell state settings',
        insertText: '_WinAPI_ShellSetSettings(${})'
    },
    {
        label: '_WinAPI_ShellUpdateImage',
        documentation: 'Notifies the Shell that an image in the system image list has changed ',
        insertText: '_WinAPI_ShellUpdateImage(${})'
    }
]

// Add the function icon and detail to each entry
for (var i of items) {
    i.kind = CompletionItemKind.Function
    i.detail = 'UDF - #include <WinAPIShellEx.au3>'
    i.insertText = new SnippetString(i.insertText)
}

module.exports = items