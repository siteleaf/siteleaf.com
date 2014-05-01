# Compile SASS
guard 'sass', :input => 'styles/sass', :output => 'styles/css', :style => :compressed

# Compile Coffeescript
guard 'coffeescript', :input => 'scripts/coffee', :output => 'scripts/js'

# Compress JS
guard :jammit, :output_folder => "scripts/js/min/" do
  watch(%r{^scripts/(.*)\.js$})
end

guard 'livereload' do
  watch(%r{.+\.(html|liquid)$})
  watch(%r{styles/.+\.(css|js|html)})
  watch(%r{scripts/js/min/.+\.(css|js|html)})
end