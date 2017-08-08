FROM heroku/cedar

RUN cd /tmp && git clone https://github.com/heroku/heroku-buildpack-nodejs
ENV HOME=/app
WORKDIR /app

ENV MEMORY_AVAILABLE=$MEMORY_AVAILABLE NODE_ENV=${NODE_ENV:-production} NODE_HOME="$HOME/.heroku/node" PATH="$HOME/.heroku/node/bin:$HOME/.heroku/yarn/bin:$PATH:$HOME/bin:$HOME/node_modules/.bin" WEB_CONCURRENCY=$WEB_CONCURRENCY WEB_MEMORY=$WEB_MEMORY 



COPY . /app

RUN output=$(/tmp/heroku-buildpack-nodejs/bin/compile /app /tmp/cache) || echo $output
