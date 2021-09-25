FROM docker:git

WORKDIR /usr/app/src
COPY ./script.sh ./

RUN chmod +x script.sh
ENTRYPOINT ["sh", "./script.sh"]