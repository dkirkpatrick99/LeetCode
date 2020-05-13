class PoemsController < ApplicationController

    before_action :require_signed_in!, only: [:index, :new, :create, :edit, :update]

    def index
        @poems = Poem.all
    end

    def new
        @poem = Poem.new
    end

    def create
        @poem = Poem.new(poem_params)
        @poem.author_id = current_user.id

        if @poem.save
            redirect_to poems_url
        else
            flash[:errors] = @poem.errors.full_messages
            render :new
        end
    end

    def edit
        @poem = current_user.poems.find_by(id: params[:id])
    end

    def update
        @poem = current_user.poems.find_by(id: params[:id])

        if @poem && @poem.update_attributes(poem_params)
            redirect_to poems_url
        else
            flash[:errors] = ['Something went wrong!']
            render :edit
        end
    end

    private
    def poem_params 
        params.require(:poem).permit(:title, :stanzas, :complete, :author_id)
    end
end
