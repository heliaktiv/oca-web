Having a model with a field `stage_id` that is displayed with
`widget="statusbar"`, with this module installed you can add a `Char` field
`stage_id_visible_states` that you can populate with a comma-separated list of
states that you want to make visible for each record on its form view.

If your state field is of type `Many2one`, the contents of your visible states
field needs to be a comma-separated list of numeric ids.

The visible states field needs to be present in the form view, but it can be
invisible.

The current state of the record is always visible, even if it is not in the
list of visible states for your record.

If the visible states field is not populated, all states will be visible.

Odoo provides a `visible_states` attribute on the widget level itself. It can
be used to globally filter out states that should be visible. When both
mechanisms are active, a state has to be present in both lists to be visible.
