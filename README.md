# A Browser Snake Game Built With Vanilla ~~JS~~ Python!

### More details: [Sick Of JavaScript For The Web? Just Write Browser Python Instead](https://medium.com/@yakko.majuri/sick-of-javascript-just-use-browser-python-4b9679efe08b?source=friends_link&sk=40e664d45bfea34d35189c32cd5d0a51)

Want to improve the game? Feel free to submit a pull request!

# My Idea

I saw a [post](https://groups.google.com/g/brython/c/0HE7DkqS4pg/m/jFSZjmHqBgAJ) on the Brython community forum (a bit old post, I agree, but still interesting) in which someone ask about the possibility of make a desktop app with electron using Brython. 

I really love the idea because Python is my main language, Brython is an awesome project and if it really could be possible so a whole world of possibilities would be opened for Python developers. 

Also it could help us with mobile development using React Native, Ionic or any other JS Framework. Honestly, I dont't like Kivy and it's KV Lang. It sounds like reinventing the wheel... I mean HTML and CSS make all that work and everybody already knows how to do all that stuff.

Browser games with Brython really have impressed me. I know there are some other examples. I just choose this one from [Yakko Majuri](https://github.com/yakkomajuri) because of it's code simplicity... And because The Snake is my favorite retro game :smile:!


<div style='text-align: right;'>
    <a href="https://github.com/AlmirPaulo"><i>-Almir Paulo</i></a>
</div>

# A Little Guide on How to Proceed

## 1 Installing dependencies

 
Your application needs to run, ideally, even without internet connection. So, all your dependencies need to be installed locally. For Brython you just need to visit the [official download page](https://github.com/brython-dev/brython/releases) and grab the newest release. Then you paste it in your code like this:
 
    <script type="text/javascript"
        src="Brython-3.9.1/brython.js">
    </script>
 
<blockquote><b>Note:</b> Remeber to insert "brython.js" <b>ABOVE</b> of "brython_stdlib.js" (in case you need both). Otherwise, it will bug your app.</blockquote>  

If you have any other dependency, proceed the same way. Take a look at what I did with Bootstrap on the source code for an example. However, if it is a JS library you need to import, you also could proceed like this, but in order to access the library in your Python code you should use the *window* object. Read more in the [official documentation](https://brython.info/static_doc/en/jsobjects.html).

You also need to install *npm* (In linux or Mac just use your package manager. For Windows users, I have no idea on how to do it. I'm sorry.), *npm init* a project, then *npm install electron --save-dev* and *npm install electron-packager -g*.  

## 2 Write your code!

We all know there are two methods to insert Brython code on HTML: (1) write all your Python code inside the **script tag** or (2) as a separate file by the **src** attribute of the **script tag**. Sadly, Electron cannot compile the app whithin the Python scripts files. So, My advice is to develop the app with the method (2) and only before compile (making all the necessary modifications in the HTML, of course) paste the code directly in HTML like in method (1).

<blockquote><b>Note:</b>  You should name your HTML file "index.html".</blockquote>
 
## 3 We actually need a bit of Javascript...

But don't worry! Even if you do not understand/work with JS, you will be able to handle the code bellow. I will try my best to code it the cleaner way. 

    const {app, BrowserWindow} = require('electron');

    let mainWindow;

    app.on('ready', ()=> {
   
    mainWindow = new BrowserWindow({
        ///// Optional Parameters /////
        //    width: 800,
        //    height: 600,
        //    resizable: true
        }); 

    mainWindow.loadURL(`file://${__dirname}/index.html`)

    });

Copy this text and paste it in a file named *index.js* in the root folder of your project. Now you can run your app.

    electron .

If you need more details, please visit the [official Electron documentation](https://www.electronjs.org/docs).

## 4 Compiling

We need to use the **electron-packager** to compile our app. If you still do not install it, just run **npm install electron-packager -g**. Electron may compile an app for Windows, Linux and Mac.  The only command we need is this one: 

    electron-packager <sourcedir> <appname> --platform=<platform> --arch=<arch> [optional flags...]

To fulfill the parameters the way you want, take a look at the [documentation](https://github.com/electron/electron-packager/blob/master/README.md).

You're Welcome.

