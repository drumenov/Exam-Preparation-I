package todolist.bindingModel;

import javax.validation.constraints.NotNull;

public class TaskBindingModel {
	@NotNull
    private String Title;

	@NotNull
	private String Comments;

    public TaskBindingModel() {
    }

    public TaskBindingModel(String title, String comments) {
        Title = title;
        Comments = comments;
    }

    public String getTitle() {
        return Title;
    }

    public void setTitle(String title) {
        Title = title;
    }

    public String getComments() {
        return Comments;
    }

    public void setComments(String comments) {
        Comments = comments;
    }
}
