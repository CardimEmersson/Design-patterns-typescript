import { ImageEditor } from './image-editor';
import { ImageEditorBackupManager } from './image-editor-backup-manager';

const imageEditor = new ImageEditor('/media/image.png', 'png');
const backupManager = new ImageEditorBackupManager(imageEditor);

backupManager.backup();
imageEditor.convertFomatTo('gif');

backupManager.backup();
imageEditor.convertFomatTo('bmp');

backupManager.backup();
imageEditor.convertFomatTo('jpg');

console.log(imageEditor);
backupManager.undo();
console.log(imageEditor);
