#webpack-react-boilerplate

##Set up

####Open up terminal to run the following commands.

####Install latest version of Homebrew.

    ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    brew update
    
####Use Homebrew to install Node.

    brew install node
    
####Within your desired directory, clone this repo.

    git clone https://github.com/masonbedard/webpack-react-boilerplate.git
    
####Within root of cloned project, install the necessary dependencies for this project.

    npm install
    
##Development

####If modifying only client-side code without the need for custom server logic, run the following from the root of the project. After doing so, hot reloading is enabled and saving files will automatically refresh the app in the browser.

	npm run dev
	
####Otherwise, run the following to rebuild the app and then to serve using your own server.

	npm run build
	npm run serve
	
##To do

- [ ] Create prod configuration
- [ ] Add support for react-router
- [ ] Add support for css-modules
- [ ] Add support for testing

##References

https://robots.thoughtbot.com/setting-up-webpack-for-react-and-hot-module-replacement

##More complete boilerplate

https://github.com/gaearon/react-hot-boilerplate

https://github.com/vesparny/react-kickstart
